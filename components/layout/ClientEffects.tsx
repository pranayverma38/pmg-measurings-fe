"use client";
import { useDataBackground } from "@/util/data-bg";
import useCollapse from "@/util/useCollapse";
import ParallaxEffect from "@/components/effects/ParallaxEffect";
import RevealTextEffect from "@/components/effects/RevealTextEffect";
import AboutSvgEffect from "@/components/effects/AboutSvgEffect";
import PanelPinEffect from "@/components/effects/PanelPinEffect";
import SmoothScrollEffect from "@/components/effects/SmoothScrollEffect";
import ScrollMoveUpEffect from "@/components/effects/ScrollMoveUpEffect";
import ScrollSectionEffects from "@/components/effects/ScrollSectionEffects";
import ScrollRotateMoveEffect from "@/components/effects/ScrollRotateMoveEffect";
import ScrollRotateIdleEffect from "@/components/effects/ScrollRotateIdleEffect";
import AtBrandScrollEffect from "@/components/effects/AtBrandScrollEffect";
import CardAwardPreviewEffect from "@/components/effects/CardAwardPreviewEffect";
import AtItemAnimeEffect from "@/components/effects/AtItemAnimeEffect";
import useImageHoverEffects from "@/util/ImageHoverEffects";
import FadeAnimEffect from "@/components/effects/FadeAnimEffect";
import CharAnimEffect from "@/components/effects/CharAnimEffect";
import ScaleImageScrollEffect from "@/components/effects/ScaleImageScrollEffect";
import ThrowableEffect from "@/components/effects/ThrowableEffect";
import CarouselTickerEffect from "@/components/effects/CarouselTickerEffect";
import Home8Sec8PinEffect from "@/components/effects/Home8Sec8PinEffect";
import TextScrambleEffect from "@/components/effects/TextScrambleEffect";
import AnimZoominEffect from "@/components/effects/AnimZoominEffect";
import Home10Sec5PinEffect from "@/components/effects/Home10Sec5PinEffect";
import Home10Sec4PinEffect from "@/components/effects/Home10Sec4PinEffect";
import Home10Sec6PinEffect from "@/components/effects/Home10Sec6PinEffect";
import Home12Sec2StackEffect from "@/components/effects/Home12Sec2StackEffect";
import Home15Sec6FlipEffect from "@/components/effects/Home15Sec6FlipEffect";
import MagnificPopupEffect from "@/components/effects/MagnificPopupEffect";
import ThemeRouteSync from "@/components/effects/ThemeRouteSync";

export default function ClientEffects() {
    useDataBackground();
    useCollapse();
    useImageHoverEffects();
    return (
        <>
            <ParallaxEffect />
            <RevealTextEffect />
            <AboutSvgEffect />
            <PanelPinEffect />
            <SmoothScrollEffect />
            <ScrollMoveUpEffect />
            <ScrollSectionEffects />
            <ScrollRotateMoveEffect />
            <AtBrandScrollEffect />
            <CardAwardPreviewEffect />
            <AtItemAnimeEffect />
            <FadeAnimEffect />
            <ScaleImageScrollEffect />
            <ScrollRotateIdleEffect />
            <CharAnimEffect />
            <ThrowableEffect />
            <CarouselTickerEffect />
            <Home8Sec8PinEffect />
            <TextScrambleEffect />
            <AnimZoominEffect />
            <Home10Sec4PinEffect />
            <Home10Sec5PinEffect />
            <Home10Sec6PinEffect />
            <Home12Sec2StackEffect />
            <Home15Sec6FlipEffect />
            <MagnificPopupEffect />
            <ThemeRouteSync />
        </>
    );
}
