import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1 } from "../Heading"
import { Section } from "../Section"
import { IconButton } from "../Button"
import { Search } from "styled-icons/feather"

const Outer = styled.header`
  background: ${({ theme }) => theme.variants.header.primary.backgroundColor};
  margin-bottom: 1.5rem;
`
const Inner = styled.div`
  margin: 0px auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: darkseagreen;
  }
`

const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
      <Section flex>
        <Section width={11 / 12}>
          <H1>
            <StyledLink to="/">{siteTitle}</StyledLink>
          </H1>
        </Section>
        <Section width={1 / 12}>
          <IconButton icon={<Search />} variant="contrast" />{" "}
        </Section>
      </Section>
    </Inner>
  </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }
