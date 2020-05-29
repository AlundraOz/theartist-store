import App, { Container } from 'next/app';

class MyApp extends App {
    render() {
        const { Component } = this.props;

        return(
            <Container>
                <p>im in every page!</p>
                <Component/>
            </Container>
        )
    }
}

export default MyApp;