import Link from "next/link";
import Container from "../container/Container";

const Header = () => (
  <header>
    <Container className="h-12 flex justify-between items-center">
      <Link href='/'>
        <a className="font-bold">BINO.</a>
      </Link>
      <button className="w-9 h-9 inline-flex items-center justify-center rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </button>
    </Container>
  </header>
)

export default Header