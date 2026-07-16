'use client'

import React, { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface RoseTwoLoaderProps {
    className?: string
    size?: number
    strokeWidth?: number
    particleCount?: number
    durationMs?: number
}

export const RoseTwoLoader: React.FC<RoseTwoLoaderProps> = ({
    className,
    size = 100,
    strokeWidth = 4.6,
    particleCount = 74,
    durationMs = 5200,
}) => {
    const groupRef = useRef<SVGGElement>(null)
    const pathRef = useRef<SVGPathElement>(null)
    const particlesRef = useRef<(SVGCircleElement | null)[]>([])

    const config = {
        rotate: true,
        trailSpan: 0.3,
        rotationDurationMs: 28000,
        pulseDurationMs: 4300,
        roseA: 9.2,
        roseABoost: 0.6,
        roseBreathBase: 0.72,
        roseBreathBoost: 0.28,
        roseScale: 3.25,
    }

    const point = (progress: number, detailScale: number) => {
        const t = progress * Math.PI * 2
        const a = config.roseA + detailScale * config.roseABoost
        const r = a * (config.roseBreathBase + detailScale * config.roseBreathBoost) * Math.cos(2 * t)
        return {
            x: 50 + Math.cos(t) * r * config.roseScale,
            y: 50 + Math.sin(t) * r * config.roseScale,
        }
    }

    const getDetailScale = (time: number) => {
        const pulseProgress = (time % config.pulseDurationMs) / config.pulseDurationMs
        const pulseAngle = pulseProgress * Math.PI * 2
        return 0.52 + ((Math.sin(pulseAngle + 0.55) + 1) / 2) * 0.48
    }

    const getRotation = (time: number) => {
        if (!config.rotate) return 0
        return -((time % config.rotationDurationMs) / config.rotationDurationMs) * 360
    }

    const buildPath = (detailScale: number, steps = 480) => {
        return Array.from({ length: steps + 1 }, (_, index) => {
            const p = point(index / steps, detailScale)
            return `${index === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`
        }).join(' ')
    }

    const normalizeProgress = (progress: number) => {
        return ((progress % 1) + 1) % 1
    }

    const getParticle = (index: number, progress: number, detailScale: number) => {
        const tailOffset = index / (particleCount - 1)
        const p = point(normalizeProgress(progress - tailOffset * config.trailSpan), detailScale)
        const fade = Math.pow(1 - tailOffset, 0.56)
        return {
            x: p.x,
            y: p.y,
            radius: 0.9 + fade * 2.7,
            opacity: 0.04 + fade * 0.96,
        }
    }

    useEffect(() => {
        let animationId: number
        const startedAt = performance.now()

        const render = (now: number) => {
            const time = now - startedAt
            const progress = (time % durationMs) / durationMs
            const detailScale = getDetailScale(time)

            if (groupRef.current) {
                groupRef.current.setAttribute('transform', `rotate(${getRotation(time)} 50 50)`)
            }

            if (pathRef.current) {
                pathRef.current.setAttribute('d', buildPath(detailScale))
            }

            particlesRef.current.forEach((node, index) => {
                if (node) {
                    const particle = getParticle(index, progress, detailScale)
                    node.setAttribute('cx', particle.x.toFixed(2))
                    node.setAttribute('cy', particle.y.toFixed(2))
                    node.setAttribute('r', particle.radius.toFixed(2))
                    node.setAttribute('opacity', particle.opacity.toFixed(3))
                }
            })

            animationId = requestAnimationFrame(render)
        }

        animationId = requestAnimationFrame(render)
        return () => cancelAnimationFrame(animationId)
    }, [durationMs, particleCount])

    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden="true"
            className={cn('overflow-visible', className)}
            style={{ width: size, height: size }}
        >
            <g ref={groupRef}>
                <path
                    ref={pathRef}
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-10"
                />
                {Array.from({ length: particleCount }).map((_, i) => (
                    <circle
                        key={i}
                        ref={(el) => {
                            particlesRef.current[i] = el
                        }}
                        fill="currentColor"
                    />
                ))}
            </g>
        </svg>
    )
}
