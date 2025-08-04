import { ButtonLink } from "../components/ButtonLink";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold">Dice Dice Baby</h1>

      <div className="flex flex-col gap-2">
        <ButtonLink to="/login">Se connecter</ButtonLink>
        <ButtonLink to="/register">Créer un compte</ButtonLink>
        <ButtonLink to="/game">Jouer en tant qu'invité</ButtonLink>
      </div>
    </>
  );
}