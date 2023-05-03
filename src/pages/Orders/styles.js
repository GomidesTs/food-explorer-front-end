import styled from 'styled-components'

export const Container = styled.div`
    max-width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10rem auto;
    grid-template-areas: 
    'header'
    'content'
    'footer';
`

export const Content = styled.main`
    grid-area: content;

    overflow-y: auto;

    padding-top: 5rem;
`

export const Table = styled.div`
    max-width: 120rem;

    margin: 0 auto;

    padding: 0 2.4rem;

    table {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: center;
               
        border-top-left-radius: 0.8rem;
        border-top-right-radius: 0.8rem;
        border-collapse: collapse;

        thead {
            display: none;
        }

        tbody {
            width: 100%;

            display: flex;
            flex-direction: column;
            gap: 2.4rem;

            tr {
                border: .8px solid ${({ theme }) => theme.COLORS.DARK_100};
                border-radius: 0.8rem;

                padding: 2.4rem;
            }

            .admin {
                display: grid;
                grid-template-columns: 1fr 2fr 2fr;
                grid-template-rows: 1fr 1fr 1fr;
                gap: .8rem;

                .status {
                    grid-column: 1 / span 3;
                    grid-row: 3;
                }

                .number_dish {
                    grid-column: 1;
                    grid-row: 1;
                }

                .description {
                    grid-column: 1 /span 3;
                    grid-row: 2;
                }

                .date {
                    grid-column: 2;
                    grid-row: 1;
                }

                select {
                    background: ${({ theme }) => theme.COLORS.DARK_200};
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};

                    border: none;

                    padding: 1rem;

                    width: 100%;

                    &:focus {
                        outline: none;
                    }
                }
               
            }
            
        }

        .user {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: .8rem;

            .status {
                grid-column: 2;
                grid-row: 1;
            }

            .number_dish {
                grid-column: 1;
                grid-row: 1;
            }

            .description {
                grid-column: 1 /span 3;
                grid-row: 2;
            }

            .date {
                grid-column: 3;
                grid-row: 1;
            }
        }
    }

    @media only screen and (min-width: 700px) {
        table {
            border: .8px solid ${({ theme }) => theme.COLORS.DARK_100};

            thead {
                width: 100%;
                display: flex;

                tr {
                    display: grid;
                    grid-template-columns: 1fr 1fr 3fr 1fr;

                    width: 100%;
                    
                    text-align: left;
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};

                    th {
                        height: 6.4rem;
                        padding: 2.1rem 1rem;
                        
                        &:nth-child(1){
                            border-bottom: .8px solid ${({ theme }) => theme.COLORS.DARK_100};
                            border-right: .8px solid ${({ theme }) => theme.COLORS.DARK_100};
                        }

                        &:nth-child(2){
                            border-bottom: .8px solid ${({ theme }) => theme.COLORS.DARK_100};
                            border-right: .8px solid ${({ theme }) => theme.COLORS.DARK_100};
                        }

                        &:nth-child(3){
                            border-bottom: .8px solid ${({ theme }) => theme.COLORS.DARK_100};
                            border-right: .8px solid ${({ theme }) => theme.COLORS.DARK_100};
                        }

                        &:nth-child(4){
                            border-bottom: .8px solid ${({ theme }) => theme.COLORS.DARK_100};
                        }
                    }
                }
            }

            tbody {
                gap: 0;

                tr {
                    border: none;
                    border-radius: none;

                    padding: 0;
                }

                td {
                    height: 6.4rem;
                    padding: .3rem 1rem;

                    display: flex;
                    align-items: center;

                    &:nth-child(1){
                        border-bottom: .8px solid ${({ theme }) => theme.COLORS.DARK_100};
                        border-right: .8px solid ${({ theme }) => theme.COLORS.DARK_100};
                    }

                    &:nth-child(2){
                        border-bottom: .8px solid ${({ theme }) => theme.COLORS.DARK_100};
                        border-right: .8px solid ${({ theme }) => theme.COLORS.DARK_100};
                    }

                    &:nth-child(3){
                        border-bottom: .8px solid ${({ theme }) => theme.COLORS.DARK_100};
                        border-right: .8px solid ${({ theme }) => theme.COLORS.DARK_100};
                    }

                    &:nth-child(4){
                        border-bottom: .8px solid ${({ theme }) => theme.COLORS.DARK_100};
                    }
                }

                .admin , .user{
                    display: grid;
                    grid-template-columns: 1fr 1fr 3fr 1fr;
                    grid-template-rows: 1fr;
                    gap: 0;

                    .status {
                        grid-column: 1;
                        grid-row: 1;
                    }

                    .number_dish {
                        grid-column: 2;
                        grid-row: 1;
                    }

                    .description {
                        grid-column: 3;
                        grid-row: 1;
                    }

                    .date {
                        grid-column: 4;
                        grid-row: 1;
                    }     
                } 
            }
        }
    }
`