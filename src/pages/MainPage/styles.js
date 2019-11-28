import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  div {
    position: relative;
  }

  .hidden {
    position: absolute;
    visibility: hidden;
  }

  .absolute {
    position: absolute;
    bottom: 1vw;
    right: 1vw;
  }

  .page {
    position: relative;
    display: flex;
    flex: 1;
  }

  @media (max-width: 576px) {
    flex-direction: column;

    .page {
      width: 100vw;
      height: 90vh;
    }
  }

  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 60vw;
  height: 60vh;
  padding: 0.8rem 1rem;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .link {
    cursor: pointer;

    h3 {
      text-decoration: underline;
    }
  }

  .image {
    position: absolute;
    bottom: 1rem;
    right: 1rem;

    img {
      width: 30vw;
      height: calc(30vw / ${props => props.aspect});
    }
  }

  @media (max-width: 576px) {
    .image {
      position: static;

      img {
        width: 50vw;
        height: calc(50vw / ${props => props.aspect});
      }
    }

    text-align: center;
    align-items: center;
  }
  @media (min-width: 576) {
    @media (max-height: 450px) {
      .link {
        position: absolute;
        top: 1rem;
        right: 1rem;
      }

      .image {
        visibility: hidden;
      }
    }
  }
`;

export const Title = styled.h1`
  text-align: inherit;
  color: black;
  font-size: 1.8rem;

  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

export const Subtitle = styled.h3`
  text-align: inherit;
  color: gray;
  font-size: 1rem;

  @media (max-width: 576px) {
    font-size: 0.7rem;
  }
`;

export const Description = styled.p`
  text-align: inherit;
  color: black;
  font-size: 1.4rem;

  @media (max-width: 576px) {
    font-size: 0.7rem;
  }
`;
