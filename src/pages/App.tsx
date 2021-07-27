import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Web3ReactManager from '../components/Web3ReactManager'
import Home from './Home'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`
const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 16px;
    padding-top: 2rem;
  `};

  z-index: 1;
`
const Marginer = styled.div`
  margin-top: 5rem;
`
export default function App() {
  return (
    <Suspense fallback={null}>
      <AppWrapper>
        <BodyWrapper>
          <Web3ReactManager>
            <Switch>
              <Route exact strict path="/" component={Home} />
            </Switch>
          </Web3ReactManager>
          <Marginer />
        </BodyWrapper>
      </AppWrapper>
    </Suspense>
  )
}
