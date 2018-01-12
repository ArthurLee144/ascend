import React, { Component } from 'react';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button } from 'reactstrap';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import TopNav from '../components/Nav';

const allSitesQuery = gql`
  {
    getAllSites {
      name
      location
      state
      description
      image
    }
  }
`;

const SitesList = ({ data: { getAllSites = [] } }) =>
  getAllSites.map(site => (
    <Col key={site.id} className="col-12 col-md-6 col-lg-4">
      <Card>
        <CardImg top width="100%" src={site.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{site.name}</CardTitle>
          <CardSubtitle>{site.location}, {site.state}</CardSubtitle>
          <CardText>{site.description}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Col>
  ));

const SitesListWithData = graphql(allSitesQuery)(SitesList);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TopNav />
        <Jumbotron>
          <h1 className="display-3">Ascend</h1>
          <p className="lead">Find the next bouldering site near you.</p>
        </Jumbotron>
        <Container>
          <Row>
            <SitesListWithData />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
