"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const MIN_METERS = 0;
const MAX_METERS = 10;
const TARGET_METERS = 5;
const TRAVEL_SPEED = 3.9;

type RunDirection = 1 | -1;

type PrecisionResult = {
    difference: number;
    score: number;
    message: string;
    accentClass: string;
};

function formatMeters(value: number): string {
    return `${value.toFixed(2)}m`;
}

function buildPrecisionResult(value: number): PrecisionResult {
    const difference = Math.abs(value - TARGET_METERS);
    const score = Math.max(0, Math.round((1 - difference / (MAX_METERS - TARGET_METERS)) * 100));

    if (difference <= 0.03) {
        return {
            difference,
            score,
            message: "Perfect stop. Dead on the 5.00m mark.",
            accentClass: "is-perfect",
        };
    }

    if (difference <= 0.12) {
        return {
            difference,
            score,
            message: "Excellent control. You were almost exact.",
            accentClass: "is-excellent",
        };
    }

    if (difference <= 0.35) {
        return {
            difference,
            score,
            message: "Strong finish. Just a tiny correction away.",
            accentClass: "is-strong",
        };
    }

    if (difference <= 0.85) {
        return {
            difference,
            score,
            message: "Good attempt. Try timing the return pass.",
            accentClass: "is-good",
        };
    }

    return {
        difference,
        score,
        message: "Keep going. Watch the rhythm and stop closer to center.",
        accentClass: "is-try-again",
    };
}

export default function HomePrecisionGameSection() {
    const [currentMeters, setCurrentMeters] = useState<number>(MIN_METERS);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [direction, setDirection] = useState<RunDirection>(1);
    const [attempts, setAttempts] = useState<number>(0);
    const [bestScore, setBestScore] = useState<number>(0);
    const [lastResult, setLastResult] = useState<PrecisionResult | null>(null);

    const frameRef = useRef<number | null>(null);
    const lastTimestampRef = useRef<number | null>(null);
    const meterValueRef = useRef<number>(MIN_METERS);
    const directionRef = useRef<RunDirection>(1);

    const scaleMarks = useMemo(() => Array.from({ length: 41 }, (_, index) => Number((index * 0.25).toFixed(2))), []);

    useEffect(() => {
        if (!isRunning) {
            if (frameRef.current !== null) {
                window.cancelAnimationFrame(frameRef.current);
                frameRef.current = null;
            }
            lastTimestampRef.current = null;
            return;
        }

        const animate = (timestamp: number) => {
            const previousTimestamp = lastTimestampRef.current ?? timestamp;
            const deltaSeconds = (timestamp - previousTimestamp) / 1000;
            lastTimestampRef.current = timestamp;

            let nextMeters = meterValueRef.current + deltaSeconds * TRAVEL_SPEED * directionRef.current;
            let nextDirection = directionRef.current;

            if (nextMeters >= MAX_METERS) {
                nextMeters = MAX_METERS - (nextMeters - MAX_METERS);
                nextDirection = -1;
            } else if (nextMeters <= MIN_METERS) {
                nextMeters = MIN_METERS + (MIN_METERS - nextMeters);
                nextDirection = 1;
            }

            meterValueRef.current = Math.min(MAX_METERS, Math.max(MIN_METERS, nextMeters));
            directionRef.current = nextDirection;

            setCurrentMeters(meterValueRef.current);
            setDirection(nextDirection);
            frameRef.current = window.requestAnimationFrame(animate);
        };

        frameRef.current = window.requestAnimationFrame(animate);

        return () => {
            if (frameRef.current !== null) {
                window.cancelAnimationFrame(frameRef.current);
                frameRef.current = null;
            }
            lastTimestampRef.current = null;
        };
    }, [isRunning]);

    const progressPercentage = ((currentMeters - MIN_METERS) / (MAX_METERS - MIN_METERS)) * 100;
    const targetProgressPercentage = ((TARGET_METERS - MIN_METERS) / (MAX_METERS - MIN_METERS)) * 100;
    const lastMissText = lastResult ? `${lastResult.difference.toFixed(2)}m away` : "No attempt yet";
    const directionText = isRunning
        ? direction === 1
            ? "Moving toward 10.00m"
            : "Returning toward 0.00m"
        : lastResult
          ? lastResult.message
          : "Press start and stop exactly on 5.00m.";

    const handleStart = () => {
        meterValueRef.current = MIN_METERS;
        directionRef.current = 1;
        lastTimestampRef.current = null;
        setCurrentMeters(MIN_METERS);
        setDirection(1);
        setLastResult(null);
        setIsRunning(true);
    };

    const handleStop = () => {
        const settledMeters = Number(meterValueRef.current.toFixed(2));
        const result = buildPrecisionResult(settledMeters);

        meterValueRef.current = settledMeters;
        setCurrentMeters(settledMeters);
        setIsRunning(false);
        setLastResult(result);
        setAttempts((previous) => previous + 1);
        setBestScore((previous) => Math.max(previous, result.score));
    };

    return (
        <section className="pmg-precision-game" aria-labelledby="pmg-precision-title">
            <div className="pmg-precision-game__glow pmg-precision-game__glow--left" aria-hidden="true" />
            <div className="pmg-precision-game__glow pmg-precision-game__glow--right" aria-hidden="true" />

            <div className="container-fluid">
                <div className="pmg-precision-game__shell">
                    <div className="pmg-precision-game__intro">
                        <span className="pmg-precision-game__eyebrow">Interaction</span>
                        <h2 id="pmg-precision-title" className="pmg-precision-game__title">
                            TEST YOUR
                            <br />
                            PRECISION.
                        </h2>
                        <p className="pmg-precision-game__lead">
                            A quick PMG challenge inspired by a measuring tape. Start the run, watch the marker travel
                            from 0 to 10 and back, then stop exactly at 5.00 meters.
                        </p>

                        <div className="pmg-precision-game__info-grid">
                            <article className="pmg-precision-game__info-card">
                                <span className="pmg-precision-game__info-label">Target</span>
                                <strong>{formatMeters(TARGET_METERS)}</strong>
                                <p>Hit the center mark as accurately as possible.</p>
                            </article>
                            <article className="pmg-precision-game__info-card">
                                <span className="pmg-precision-game__info-label">Scale</span>
                                <strong>0m to 10m</strong>
                                <p>The marker moves forward, then reverses like a tape run.</p>
                            </article>
                            <article className="pmg-precision-game__info-card">
                                <span className="pmg-precision-game__info-label">Scoring</span>
                                <strong>Out of 100</strong>
                                <p>The closer you stop to 5.00m, the better your score.</p>
                            </article>
                        </div>
                    </div>

                    <div className="pmg-precision-game__experience">
                        <div className="pmg-precision-game__panel">
                            <div className="pmg-precision-game__status-row">
                                <span className={`pmg-precision-game__live-pill${isRunning ? " is-running" : ""}`}>
                                    {isRunning ? "Live run" : "Ready"}
                                </span>
                                <span className="pmg-precision-game__target-pill">Target {formatMeters(TARGET_METERS)}</span>
                            </div>

                            <div className="pmg-precision-game__display">
                                <p className="pmg-precision-game__display-label">Current reading</p>
                                <div className="pmg-precision-game__display-value">{formatMeters(currentMeters)}</div>
                                <p className="pmg-precision-game__display-copy">{directionText}</p>
                            </div>

                            <div className="pmg-precision-game__ruler-card">
                                <div className="pmg-precision-game__ruler-window">
                                    <div className="pmg-precision-game__ruler-track">
                                        <div
                                            className="pmg-precision-game__target-line"
                                            style={{ left: `${targetProgressPercentage}%` }}
                                            aria-hidden="true"
                                        />
                                        {scaleMarks.map((mark, index) => {
                                            const isMajor = index % 4 === 0;
                                            const isTarget = Math.abs(mark - TARGET_METERS) < 0.001;

                                            return (
                                                <span
                                                    key={mark}
                                                    className={`pmg-precision-game__tick${isMajor ? " is-major" : ""}${
                                                        isTarget ? " is-target" : ""
                                                    }`}
                                                    style={{ left: `${(mark / MAX_METERS) * 100}%` }}
                                                    aria-hidden="true"
                                                />
                                            );
                                        })}
                                        <div
                                            className={`pmg-precision-game__marker${isRunning ? " is-running" : ""}`}
                                            style={{ left: `${progressPercentage}%` }}
                                            aria-hidden="true"
                                        >
                                            <span className="pmg-precision-game__marker-stem" />
                                            <span className="pmg-precision-game__marker-head" />
                                        </div>
                                    </div>
                                </div>

                                <div className="pmg-precision-game__ruler-labels" aria-hidden="true">
                                    <span>0m</span>
                                    <span>2.5m</span>
                                    <span>5.0m</span>
                                    <span>7.5m</span>
                                    <span>10m</span>
                                </div>
                            </div>

                            <div className="pmg-precision-game__meta-grid">
                                <div className="pmg-precision-game__meta-card">
                                    <span className="pmg-precision-game__meta-label">Attempts</span>
                                    <strong>{attempts}</strong>
                                </div>
                                <div className="pmg-precision-game__meta-card">
                                    <span className="pmg-precision-game__meta-label">Best score</span>
                                    <strong>{bestScore}</strong>
                                </div>
                                <div className="pmg-precision-game__meta-card">
                                    <span className="pmg-precision-game__meta-label">Last miss</span>
                                    <strong>{lastMissText}</strong>
                                </div>
                            </div>

                            {lastResult && (
                                <div className={`pmg-precision-game__result ${lastResult.accentClass}`} aria-live="polite">
                                    <div>
                                        <span className="pmg-precision-game__result-label">Score</span>
                                        <strong>{lastResult.score}/100</strong>
                                    </div>
                                    <p>{lastResult.message}</p>
                                </div>
                            )}

                            <div className="pmg-precision-game__actions">
                                {!isRunning ? (
                                    <button
                                        type="button"
                                        className="pmg-precision-game__button pmg-precision-game__button--primary"
                                        onClick={handleStart}
                                    >
                                        {attempts > 0 ? "Try again" : "Start challenge"}
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="pmg-precision-game__button pmg-precision-game__button--primary is-stop"
                                        onClick={handleStop}
                                    >
                                        Stop now
                                    </button>
                                )}

                                <button
                                    type="button"
                                    className="pmg-precision-game__button pmg-precision-game__button--ghost"
                                    onClick={() => {
                                        setIsRunning(false);
                                        meterValueRef.current = MIN_METERS;
                                        directionRef.current = 1;
                                        lastTimestampRef.current = null;
                                        setCurrentMeters(MIN_METERS);
                                        setDirection(1);
                                        setLastResult(null);
                                    }}
                                >
                                    Reset meter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .pmg-precision-game {
                            position: relative;
                            overflow: hidden;
                            padding: clamp(72px, 8vw, 110px) 0;
                            background:
                                radial-gradient(circle at 12% 18%, rgba(21, 98, 161, 0.14), transparent 28%),
                                radial-gradient(circle at 88% 12%, rgba(255, 201, 106, 0.22), transparent 24%),
                                linear-gradient(180deg, #f8f7f3 0%, #f2eee8 48%, #edf4fb 100%);
                        }

                        .pmg-precision-game::before {
                            content: "";
                            position: absolute;
                            inset: 0;
                            background-image:
                                linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px);
                            background-size: 40px 40px;
                            mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.62) 0%, transparent 100%);
                            pointer-events: none;
                        }

                        .pmg-precision-game__glow {
                            position: absolute;
                            width: min(32vw, 420px);
                            height: min(32vw, 420px);
                            border-radius: 999px;
                            filter: blur(90px);
                            pointer-events: none;
                            opacity: 0.46;
                        }

                        .pmg-precision-game__glow--left {
                            left: -10%;
                            top: 12%;
                            background: rgba(21, 98, 161, 0.18);
                        }

                        .pmg-precision-game__glow--right {
                            right: -4%;
                            bottom: 6%;
                            background: rgba(255, 201, 106, 0.24);
                        }

                        .pmg-precision-game .container-fluid {
                            position: relative;
                            z-index: 1;
                        }

                        .pmg-precision-game__shell {
                            max-width: 1440px;
                            margin: 0 auto;
                            padding: 0 clamp(14px, 3vw, 28px);
                            display: grid;
                            grid-template-columns: minmax(0, 1fr);
                            gap: clamp(24px, 3vw, 34px);
                            align-items: stretch;
                        }

                        .pmg-precision-game__intro,
                        .pmg-precision-game__panel {
                            position: relative;
                            border-radius: 32px;
                            border: 1px solid rgba(148, 163, 184, 0.16);
                            background: rgba(255, 255, 255, 0.7);
                            box-shadow:
                                0 24px 70px rgba(15, 23, 42, 0.08),
                                inset 0 1px 0 rgba(255, 255, 255, 0.92);
                            backdrop-filter: blur(14px);
                        }

                        .pmg-precision-game__intro {
                            display: flex;
                            flex-direction: column;
                            height: 100%;
                            padding: clamp(26px, 4vw, 42px);
                        }

                        .pmg-precision-game__eyebrow {
                            display: inline-flex;
                            align-items: center;
                            min-height: 34px;
                            margin-bottom: 18px;
                            padding: 7px 14px;
                            border-radius: 999px;
                            background: rgba(255, 255, 255, 0.9);
                            border: 1px solid rgba(21, 98, 161, 0.12);
                            color: #1562a1;
                            font-size: 12px;
                            font-weight: 700;
                            letter-spacing: 0.18em;
                            text-transform: uppercase;
                        }

                        .pmg-precision-game__title {
                            margin: 0;
                            color: #0f172a;
                            font-size: clamp(2rem, 4.2vw, 3.6rem);
                            line-height: 0.88;
                            font-weight: 800;
                            letter-spacing: -0.06em;
                            text-transform: uppercase;
                        }

                        .pmg-precision-game__lead {
                            margin: 22px 0 0;
                            max-width: 34rem;
                            color: rgba(15, 23, 42, 0.68);
                            font-size: clamp(1rem, 1.3vw, 1.12rem);
                            line-height: 1.8;
                        }

                        .pmg-precision-game__info-grid {
                            display: grid;
                            grid-template-columns: repeat(3, minmax(0, 1fr));
                            gap: 14px;
                            margin-top: auto;
                            padding-top: 28px;
                        }

                        .pmg-precision-game__info-card {
                            padding: 18px 18px 16px;
                            border-radius: 22px;
                            background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(244, 247, 251, 0.94));
                            border: 1px solid rgba(148, 163, 184, 0.16);
                        }

                        .pmg-precision-game__info-label,
                        .pmg-precision-game__meta-label,
                        .pmg-precision-game__result-label,
                        .pmg-precision-game__display-label {
                            display: block;
                            margin-bottom: 8px;
                            color: rgba(15, 23, 42, 0.5);
                            font-size: 11px;
                            font-weight: 700;
                            letter-spacing: 0.14em;
                            text-transform: uppercase;
                        }

                        .pmg-precision-game__info-card strong,
                        .pmg-precision-game__meta-card strong,
                        .pmg-precision-game__result strong {
                            display: block;
                            color: #0f172a;
                            font-size: clamp(1.1rem, 1.6vw, 1.4rem);
                            line-height: 1.15;
                            font-weight: 700;
                            letter-spacing: -0.03em;
                        }

                        .pmg-precision-game__info-card p,
                        .pmg-precision-game__result p {
                            margin: 10px 0 0;
                            color: rgba(15, 23, 42, 0.62);
                            font-size: 14px;
                            line-height: 1.7;
                        }

                        .pmg-precision-game__experience {
                            min-width: 0;
                            height: 100%;
                        }

                        .pmg-precision-game__panel {
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-start;
                            height: 100%;
                            padding: clamp(20px, 3vw, 28px);
                        }

                        .pmg-precision-game__status-row,
                        .pmg-precision-game__actions {
                            margin-top: 20px;
                            padding-top: 4px;
                            justify-content: flex-start;
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            gap: 14px;
                        }

                        .pmg-precision-game__live-pill,
                        .pmg-precision-game__target-pill {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            min-height: 36px;
                            padding: 8px 14px;
                            border-radius: 999px;
                            font-size: 12px;
                            font-weight: 700;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                        }

                        .pmg-precision-game__live-pill {
                            color: rgba(15, 23, 42, 0.62);
                            background: rgba(15, 23, 42, 0.06);
                        }

                        .pmg-precision-game__live-pill.is-running {
                            color: #fff;
                            background: linear-gradient(135deg, #1562a1 0%, #0f4f82 100%);
                            box-shadow: 0 14px 32px rgba(21, 98, 161, 0.24);
                        }

                        .pmg-precision-game__target-pill {
                            color: #7c2d12;
                            background: rgba(255, 210, 129, 0.35);
                            border: 1px solid rgba(251, 191, 36, 0.26);
                        }

                        .pmg-precision-game__display {
                            padding: clamp(22px, 3vw, 30px) 0 16px;
                            text-align: center;
                        }

                        .pmg-precision-game__display-value {
                            color: #0f172a;
                            font-size: clamp(3rem, 8vw, 5.4rem);
                            line-height: 0.95;
                            font-weight: 800;
                            letter-spacing: -0.08em;
                        }

                        .pmg-precision-game__display-copy {
                            margin: 16px auto 0;
                            max-width: 28rem;
                            color: rgba(15, 23, 42, 0.62);
                            font-size: 15px;
                            line-height: 1.7;
                        }

                        .pmg-precision-game__ruler-card {
                            padding: 18px;
                            border-radius: 28px;
                            background:
                                linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(248, 241, 218, 0.82) 100%);
                            border: 1px solid rgba(148, 163, 184, 0.14);
                            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);
                        }

                        .pmg-precision-game__ruler-window {
                            position: relative;
                            padding: 20px 8px 8px;
                            border-radius: 22px;
                            background: rgba(255, 253, 245, 0.78);
                            overflow: hidden;
                        }

                        .pmg-precision-game__ruler-track {
                            position: relative;
                            height: 112px;
                            border-radius: 18px;
                            background:
                                linear-gradient(180deg, rgba(255, 255, 255, 0.65), rgba(252, 246, 227, 0.94)),
                                repeating-linear-gradient(
                                    90deg,
                                    rgba(255, 255, 255, 0.16) 0 1px,
                                    transparent 1px 22px
                                );
                            border: 1px solid rgba(148, 163, 184, 0.16);
                        }

                        .pmg-precision-game__tick,
                        .pmg-precision-game__target-line,
                        .pmg-precision-game__marker {
                            position: absolute;
                            top: 12px;
                            transform: translateX(-50%);
                        }

                        .pmg-precision-game__tick {
                            width: 2px;
                            height: 28px;
                            background: rgba(15, 23, 42, 0.18);
                            border-radius: 999px;
                        }

                        .pmg-precision-game__tick.is-major {
                            height: 42px;
                            background: rgba(15, 23, 42, 0.28);
                        }

                        .pmg-precision-game__tick.is-target {
                            background: rgba(220, 38, 38, 0.2);
                        }

                        .pmg-precision-game__target-line {
                            top: 0;
                            bottom: 0;
                            width: 4px;
                            transform: translateX(-50%);
                            background: linear-gradient(180deg, rgba(220, 38, 38, 0) 0%, #dc2626 18%, #dc2626 82%, rgba(220, 38, 38, 0) 100%);
                            box-shadow: 0 0 22px rgba(220, 38, 38, 0.24);
                        }

                        .pmg-precision-game__marker {
                            top: 18px;
                            z-index: 2;
                            transition: transform 0.16s ease;
                        }

                        .pmg-precision-game__marker.is-running {
                            animation: pmg-precision-pulse 1.2s ease-in-out infinite;
                        }

                        .pmg-precision-game__marker-stem {
                            display: block;
                            width: 4px;
                            height: 72px;
                            margin: 0 auto;
                            border-radius: 999px;
                            background: linear-gradient(180deg, #1562a1 0%, #0f4f82 100%);
                            box-shadow: 0 12px 26px rgba(21, 98, 161, 0.22);
                        }

                        .pmg-precision-game__marker-head {
                            position: absolute;
                            top: -8px;
                            left: 50%;
                            width: 18px;
                            height: 18px;
                            border-radius: 50%;
                            background: #0f172a;
                            border: 4px solid #fff;
                            box-shadow: 0 10px 20px rgba(15, 23, 42, 0.16);
                            transform: translateX(-50%);
                        }

                        .pmg-precision-game__ruler-labels {
                            display: grid;
                            grid-template-columns: repeat(5, minmax(0, 1fr));
                            gap: 8px;
                            margin-top: 14px;
                            color: rgba(15, 23, 42, 0.55);
                            font-size: 12px;
                            font-weight: 700;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                        }

                        .pmg-precision-game__ruler-labels span:nth-child(3) {
                            text-align: center;
                            color: #dc2626;
                        }

                        .pmg-precision-game__ruler-labels span:last-child {
                            text-align: right;
                        }

                        .pmg-precision-game__meta-grid {
                            display: grid;
                            grid-template-columns: repeat(3, minmax(0, 1fr));
                            gap: 12px;
                            margin-top: 18px;
                        }

                        .pmg-precision-game__meta-card {
                            padding: 16px 16px 14px;
                            border-radius: 20px;
                            background: rgba(248, 250, 252, 0.8);
                            border: 1px solid rgba(148, 163, 184, 0.14);
                        }

                        .pmg-precision-game__result {
                            display: grid;
                            grid-template-columns: auto 1fr;
                            gap: 18px;
                            align-items: start;
                            margin-top: 18px;
                            padding: 18px;
                            border-radius: 22px;
                            border: 1px solid rgba(148, 163, 184, 0.14);
                            background: rgba(255, 255, 255, 0.82);
                        }

                        .pmg-precision-game__result.is-perfect {
                            background: linear-gradient(135deg, rgba(16, 185, 129, 0.14), rgba(255, 255, 255, 0.94));
                        }

                        .pmg-precision-game__result.is-excellent {
                            background: linear-gradient(135deg, rgba(21, 98, 161, 0.14), rgba(255, 255, 255, 0.94));
                        }

                        .pmg-precision-game__result.is-strong {
                            background: linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(255, 255, 255, 0.94));
                        }

                        .pmg-precision-game__result.is-good {
                            background: linear-gradient(135deg, rgba(251, 191, 36, 0.16), rgba(255, 255, 255, 0.94));
                        }

                        .pmg-precision-game__result.is-try-again {
                            background: linear-gradient(135deg, rgba(249, 115, 22, 0.14), rgba(255, 255, 255, 0.94));
                        }

                        .pmg-precision-game__button {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            min-height: 46px;
                            padding: 11px 18px;
                            border-radius: 16px;
                            border: 1px solid transparent;
                            font-size: 14px;
                            font-weight: 700;
                            line-height: 1;
                            transition:
                                transform 0.2s ease,
                                box-shadow 0.2s ease,
                                background-color 0.2s ease,
                                border-color 0.2s ease,
                                color 0.2s ease;
                        }

                        .pmg-precision-game__button:hover {
                            transform: translateY(-2px);
                        }

                        .pmg-precision-game__button--primary {
                            color: #fff;
                            background: linear-gradient(135deg, #1562a1 0%, #0f4f82 100%);
                            box-shadow: 0 12px 24px rgba(21, 98, 161, 0.2);
                        }

                        .pmg-precision-game__button--primary.is-stop {
                            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                            box-shadow: 0 12px 24px rgba(15, 23, 42, 0.18);
                        }

                        .pmg-precision-game__button--ghost {
                            color: #0f172a;
                            background: rgba(255, 255, 255, 0.82);
                            border-color: rgba(148, 163, 184, 0.22);
                            box-shadow: 0 10px 20px rgba(15, 23, 42, 0.05);
                        }

                        @media (min-width: 1100px) {
                            .pmg-precision-game__shell {
                                grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
                            }
                        }

                        @media (max-width: 991px) {
                            .pmg-precision-game__info-grid,
                            .pmg-precision-game__meta-grid {
                                grid-template-columns: repeat(2, minmax(0, 1fr));
                            }
                        }

                        @media (max-width: 767px) {
                            .pmg-precision-game {
                                padding: 58px 0;
                            }

                            .pmg-precision-game__intro,
                            .pmg-precision-game__panel {
                                border-radius: 26px;
                            }

                            .pmg-precision-game__title {
                                font-size: clamp(1.85rem, 9vw, 2.8rem);
                            }

                            .pmg-precision-game__info-grid,
                            .pmg-precision-game__meta-grid,
                            .pmg-precision-game__result {
                                grid-template-columns: minmax(0, 1fr);
                            }

                            .pmg-precision-game__display-value {
                                font-size: clamp(2.8rem, 16vw, 4.3rem);
                            }

                            .pmg-precision-game__ruler-card {
                                padding: 14px;
                            }

                            .pmg-precision-game__ruler-track {
                                height: 100px;
                            }

                            .pmg-precision-game__marker-stem {
                                height: 64px;
                            }

                            .pmg-precision-game__button {
                                width: 100%;
                                border-radius: 14px;
                            }
                        }

                        @media (prefers-reduced-motion: reduce) {
                            .pmg-precision-game__marker.is-running,
                            .pmg-precision-game__button,
                            .pmg-precision-game__live-pill {
                                animation: none;
                                transition: none;
                            }
                        }

                        @keyframes pmg-precision-pulse {
                            0%,
                            100% {
                                transform: translateX(-50%) scale(1);
                            }
                            50% {
                                transform: translateX(-50%) scale(1.04);
                            }
                        }
                    `,
                }}
            />
        </section>
    );
}
