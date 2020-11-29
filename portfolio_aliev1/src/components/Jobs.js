import React, {useState, useContext } from "react"
import Title from "./other/Title"
import { graphql, useStaticQuery } from "gatsby"
// import OuterContentContainer from "./OuterContentContainer"
import InsidePart from "./other/InnerSection"
// import JobDescription from "./JobDescription"
// import JobButton from "./JobButton"
import ButtonComp from "./other/ButtonComp"
import styled, { ThemeContext } from "styled-components"
import { FaAngleDoubleRight } from "react-icons/fa"




const StyledContainer = styled.section`
  padding: 5rem 0;
  background: ${({ theme, grey }) => grey && theme.colors.grey10};
`

const JobsContainer = ({ children, grey }) => {
  return <StyledContainer grey={grey}>{children}</StyledContainer>
}


const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 4rem;

  @media screen and (min-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`



const JobInfoPart = styled.article`
  h3 {
    font-weight: 400;
  }
  h4 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.grey5};
    background: ${({ theme }) => theme.colors.grey9};
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: ${({ theme }) => theme.radius.radius};
  }
`
const JobDate = styled.p`
  letter-spacing: ${({ theme }) => theme.spacings.spacing};
`


const StyledJobButton = styled.button `
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  letter-spacing: ${({ theme }) => theme.spacings.spacing};
  margin: 0.3rem 0.5rem;
  transition: ${({ theme }) => theme.transitions.transition};
  cursor: pointer;
  padding: 0.25rem 0;
  line-height: 1;
  border-radius: 0;

  color: ${({ active, theme }) =>
    active ? theme.colors.primary5 : theme.colors.grey1};

  box-shadow: ${({ active, theme }) =>
    active && `0 2px ${theme.colors.primary5}`};

  &:hover {
    color: ${({ theme }) => theme.colors.primary5};
    box-shadow:  ${({ theme }) => `2px ${theme.colors.primary5}`};
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 1rem;

    &:hover {
      box-shadow: ${({ theme }) => `-2px 0 ${theme.colors.primary5}`};
    }

    box-shadow: ${({ active, theme }) =>
      active && `-2px 0 ${theme.colors.primary5}}`};
  }
  
`
// A JobButton can toggle between active and not active

const JobButton = ({ active, render = Function.prototype, item }) => {
  return (
    <>
      <StyledJobButton onClick={render} active={active}>
        {item}
      </StyledJobButton>
    </>
  )
}


const StyledJobDescription = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: center;
  margin-bottom: 1.25rem;

  p {
    margin-bottom: 0;
    color: var(--clr-grey-3);
  }
`

/*
 In this component we need to get access to the color property 
 from Theme.js via the useContext-hook
 in order to set the inline style
*/

const JobDescription = ({ name }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <StyledJobDescription>
      <FaAngleDoubleRight
        style={{ color: colors.primary5 }}
      ></FaAngleDoubleRight>
      <p>{name}</p>
    </StyledJobDescription>
  )
}





const query = graphql`
  {
    allStrapiJobs(sort: { fields: date, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  // destructering
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = useState(0)
  const { company, position, date, desc } = jobs[value]

  return (
    <JobsContainer>
      <Title title="erfarenhet" />
      <InsidePart type="jobs">
        <ButtonContainer>
          {jobs.map((item, index) => {
            return (
              <JobButton
                key={item.strapiId}
                render={() => setValue(index)}
                active={index === value && true}
                item={item.company}
              />
            )
          })}
        </ButtonContainer>

        <JobInfoPart>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <JobDate>{date}</JobDate>
          {desc.map(item => {
            return <JobDescription key={item.id} name={item.name} />
          })}
        </JobInfoPart>
      </InsidePart>
      <ButtonComp to="/about" center name="Mitt CV" />
    </JobsContainer>
  )
}

export default Jobs
