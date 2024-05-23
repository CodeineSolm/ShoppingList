import { CardBody, CardFooter, CardHeader, Divider, Card, Text, Heading } from "@chakra-ui/react";

export default function Item({title, description, price}) {
    return (
        <Card variant={"filled"}>
                <CardHeader>
                    <Heading size={"md"}>{title}</Heading>
                </CardHeader>
                <Divider borderColor={"gray"}/>
                <CardBody>
                    <Text>{description}</Text>
                </CardBody>
                <Divider borderColor={"gray"}/>
                <CardFooter>{price}</CardFooter>
            </Card>
    );
}