import styled from "styled-components";


const CheckoutStyled = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  .checkout-header {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    .header-block {
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }

  .test-warning {
    text-align: center;
    margin-top: 20px;
    font-size: 24px;
    color: red;
  }

  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

export default CheckoutStyled;