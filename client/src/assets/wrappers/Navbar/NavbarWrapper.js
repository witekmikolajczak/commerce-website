import styled from "styled-components";

const Wrapper = styled.nav`
  background: var(--white);
  height: var(--nav-height);
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  .icon {
    margin-right: 0.5rem;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;

    .nav-links {
      width: 25%;
      display: flex;
      justify-content: space-between;
    }
  }
  .nav-center {
    display: none;
  }

  .user-icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    justify-content: center;
    .nav-center {
      display: block;
      width: 90%;
    }
    .user-icon {
      font-size: 2rem;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;
