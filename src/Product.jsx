
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// ------------- card end -----------------------
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// ------------- grid end -----------------------
import Form from 'react-bootstrap/Form';


const Product = () => {
    return (
        <>
            <Card className="bg-dark text-white">
                <Card.Img src="https://img.freepik.com/free-photo/front-view-woman-posing-with-black-outfit_23-2151044536.jpg?w=900&t=st=1720337265~exp=1720337865~hmac=294073f0867f947f8d6d3cdea01c695c11bca8582808cf9074f9a33473301a1d" height='500px' />
                <Card.ImgOverlay>

                    <center>
                        <Card.Text>
                            <Card.Title style={{ fontSize: 80, marginTop: 140, backgroundColor: 'lite' }}>Check Our Products
                            </Card.Title>
                            <Card.Text style={{ fontSize: 20, fontWeight: 'bold' }}>This is a wider card
                                to additional content. <br />This content is a little bit longer.</Card.Text>
                        </Card.Text>
                    </center>

                </Card.ImgOverlay>
            </Card><br /><br />
            {/* -----------------------------------hero section end ----------------------------- */}
         <center style={{fontSize:40,fontWeight:'bold'}}>Our Latest Products</center><br /><br />
         
         <br /><br />
            <center>
            <Container>
                <Row>
                    <Col xs><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3757421/pexels-photo-3757421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Classic Spring</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={{ order: 12 }}><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/2616954/pexels-photo-2616954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Love Nona</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col xs={{ order: 12 }}><Card style={{ width: '18.5rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/2929574/pexels-photo-2929574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Air Force</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the

                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col xs={{ order: 12 }}><Card style={{ width: '20.3rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3440822/pexels-photo-3440822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Love Nana</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>


                    <Col xs={{ order: 12 }}><Card style={{ width: '17rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/4631712/pexels-photo-4631712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Air Force</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col xs={{ order: 12 }}><Card style={{ width: '19.1rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/2866080/pexels-photo-2866080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Classic Spring</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            </center><br /><br />
            <center>
            <Container>
                <Row>
                    <Col xs><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1620758/pexels-photo-1620758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Classic Spring</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={{ order: 12 }}><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3771682/pexels-photo-3771682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Love Nona</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col xs={{ order: 12 }}><Card style={{ width: '18.5rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/2317018/pexels-photo-2317018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Air Force</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the

                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col xs={{ order: 12 }}><Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1620826/pexels-photo-1620826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Love Nana</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>


                    <Col xs={{ order: 12 }}><Card style={{ width: '17rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1620812/pexels-photo-1620812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Air Force</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col xs={{ order: 12 }}><Card style={{ width: '17.1rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/8576219/pexels-photo-8576219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Classic Spring</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            </center><br /><br />
            <center>
            <Container>
                <Row>
                    <Col xs><Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?w=360&t=st=1720103969~exp=1720104569~hmac=b99dab05c418bc6830e0639c0ed21b6062c90f9195dee6ed8b248f443bd1c17b" />
                        <Card.Body>
                            <Card.Title>Classic Spring</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={{ order: 12 }}><Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5023.jpg?w=360&t=st=1720105565~exp=1720106165~hmac=8b09c97e5fd8e89b5639aa36faa83d5da0ce91666d1508d72fd1d9a553a91da8" />
                        <Card.Body>
                            <Card.Title>Love Nona</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col xs={{ order: 12 }}><Card style={{ width: '18.5rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/man-portrait_1296-626.jpg?w=360&t=st=1720106216~exp=1720106816~hmac=8a9a2fc74d142d8e2ed991e804310b13bdf21a21feefda27d5af718f4f323219" />
                        <Card.Body>
                            <Card.Title>Air Force</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the

                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col xs={{ order: 12 }}><Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/portrait-handsome-bearded-man-with-straw-hat-brick-wall_23-2149705871.jpg?w=360&t=st=1720105754~exp=1720106354~hmac=144d359591d71fea978c346c58552c962c077c121add0465b981444bf06cd477" />
                        <Card.Body>
                            <Card.Title>Love Nana</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>


                    <Col xs={{ order: 12 }}><Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/handsome-confident-young-curly-haired-man-drinking-coffee-standing-infront-isolated-white-wall_231208-1086.jpg?w=360&t=st=1720105817~exp=1720106417~hmac=2d3d7d294679a2fe096232326e37c26d07e10412aaac9bb3191047406d4cd534" />
                        <Card.Body>
                            <Card.Title>Air Force</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col xs={{ order: 12 }}><Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/elegant-guy-posing-while-listening-music_1153-446.jpg?t=st=1720105974~exp=1720109574~hmac=aea6380338391000cc356dd915fd3522245833f077663c33954164cf073172eb&w=360" />
                        <Card.Body>
                            <Card.Title>Classic Spring</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            </center>

        </>
    )
}
export default Product;