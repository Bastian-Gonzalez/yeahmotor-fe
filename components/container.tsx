import Intro from '../components/intro'

export default function Container({ children }) {
  return (
    <>
      <Intro />
      <div className="container mx-auto px-5">{children}</div>
    </>
  );
}
