import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   align-items: center;
   gap: .8rem;
   height: 4.8rem;

   margin-bottom: 2rem;

   background-color: ${({ theme }) => theme.COLORS.DARK_200};
   
   border-radius: .8rem;
   
   overflow: hidden;
   
   padding: .8rem;

   input {
      width: 100%;
      
      background: none;
      border: none;
      
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
   }
   `