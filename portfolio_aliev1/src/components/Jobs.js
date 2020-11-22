import React, {useState} from "react"
import Title from "./Title"
import { graphql, useStaticQuery } from "gatsby"
import OuterContentContainer from "./containers/OuterPart"
import InnerContentContainer from "./containers/InnerPart"
import JobDescription from "./containers/JobDescription"
import JobButton from "./containers/JobButton"
import ButtonLink from "./containers/ButtonLink"
import styled from "styled-components"

// Here we define the Jobs section 

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



const JobInfo = styled.article`
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
    <OuterContentContainer>
      <Title title="erfarenhet" />
      <InnerContentContainer type="jobs">
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

        <JobInfo>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <JobDate>{date}</JobDate>
          {desc.map(item => {
            return <JobDescription key={item.id} name={item.name} />
          })}
        </JobInfo>
      </InnerContentContainer>
      <ButtonLink to="/about" center name="Mitt CV" />
    </OuterContentContainer>
  )
}

export default Jobs

