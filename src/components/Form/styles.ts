import styled from 'styled-components';

export const Container = styled.form`
  width: 400px;
  margin-left: auto;

  margin-top: 600px;

  h1 {
    color: var(--secondary);
  }

  input {
    width: 100%;
    height: 40px;
    color: #fff;
    margin-top: 5px;
    background-color: var(--secondary);
    text-align: center;

    ::placeholder {
      color: #fff;
    }
  }

  textarea {
    width: 100%;
    height: 300px;
    color: #fff;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: var(--secondary);

    text-align: center;

    resize: none;

    ::placeholder {
      color: #fff;
    }
  }

  button {
    width: 60px;
    height: 40px;
    color: #fff;
    background-color: var(--primary);
    margin-left: auto;
  }
`;
