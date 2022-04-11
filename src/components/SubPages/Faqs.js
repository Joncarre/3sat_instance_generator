import {
    Container,
    Wrap,
    NewH1,
    NewP,
} from "./SubpagesElements";

const Faqs = () => {
    return (
        <Container>
            <Wrap>
                <NewH1>What is the difference between a Centralized and Decentralized App?</NewH1>
                <NewP>A centralized app is owned by a single company. The application software for a centralized app resides on one or more servers controlled by the company. As a user, you'll interact with the app by downloading a copy of the app and then sending and receiving data back and forth from the company's server.</NewP>
                <NewP>A decentralized app operates on a blockchain or peer-to-peer network of computers. It enables users to engage in transactions directly with one another as opposed to relying on a central authority. The user of a DApp will pay the developer an amount of cryptocurrency to download and use the program's source code. The source code is known as a smart contract, which allows users to complete transactions without revealing personal information.</NewP>

                <NewH1>Why do I need MetaMask to interact with the application?</NewH1>
                <NewP>In order to launch transactions on the blockchain you need to use a wallet address. This address will identify you within the blockchain, but no one will know who the person behind it really is. Wallets allow us to launch transactions to activate the functionalities of smart contracts. Without wallet software, it is impossible to make transactions.</NewP>
            </Wrap>
        </Container>
    );
}

export default Faqs;