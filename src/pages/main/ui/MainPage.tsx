import HeroSection from './components/hero';
import ModeSection from './components/mode';
import PreparationSection from './components/preparation';
import ProgressSection from './components/progress';
import TrainerSection from './components/trainer';

export default function MainPage() {
  return (
    <>
      <HeroSection />
      <TrainerSection />
      <PreparationSection />
      <ModeSection />
      <ProgressSection />
    </>
  );
}
