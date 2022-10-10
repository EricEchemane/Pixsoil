/* eslint-disable @next/next/no-img-element */
import { Button, Divider, Group, Modal, Paper, Stack, Table, Text, Title } from '@mantine/core';
import { plants } from 'model/plants';
import { soil_properties as soil_props } from 'model/soil_properties';
import React from 'react';

type plantType = "majority of vegetables" | "bulbs and tubers";
type suitablePlant = {
    name: string;
    image: string;
    description: string;
};

export default function Result(result: {
    soil_type: string;
    accuracy_score_rounded: string;
    accuracy_score: number;
    classifying: boolean;
}) {

    const [plantsModalOpened, setPlantsModalOpened] = React.useState(false);
    const [suitablePlants, setSuitablePlants] = React.useState<suitablePlant[]>([]);

    if (result.classifying) return (<Text weight={500}> Processing... </Text>);
    if (!result) return (<Text weight={500}> No results yet. Select an image first </Text>);

    const tableElements = [
        { name: 'Soil Type', value: result.soil_type },
        { name: 'Accuracy', value: result.accuracy_score_rounded + " %" },
        { name: 'Raw Accuracy', value: result.accuracy_score },
    ];

    const rows = tableElements.map(({ name, value }) => (
        <tr key={name}>
            <td>{name}</td>
            <td>{value}</td>
        </tr>
    ));

    const props = soil_props.find((prop) => prop.name === result.soil_type);

    const showPlants = (_suitablePlants: plantType) => {
        setSuitablePlants(plants[_suitablePlants]);
        setPlantsModalOpened(true);
    };

    return (
        <>
            <Text weight={700} mb={10}> Model Results: </Text>
            <Table striped className='results'>
                <thead>
                    <tr>
                        <th>Label</th>
                        <th>Values</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                    {
                        Object.entries(props || []).map((prop, index) => {
                            if (prop[0] === "name") return null;
                            if (prop[0] === "Suitable Plants") return <tr key={index}>
                                <td>{prop[0]}</td>
                                <td>
                                    <Button
                                        size='xs'
                                        onClick={() => showPlants(prop[1] as plantType)}
                                        variant="light">
                                        See list of suitable plants
                                    </Button>
                                </td>
                            </tr>;
                            return <tr key={index}>
                                <td>{prop[0]}</td>
                                <td>{prop[1]}</td>
                            </tr>;
                        })
                    }
                </tbody>
            </Table>

            <Modal
                size="xl"
                title={<Title order={4} mb={10}> Suitable Plants: </Title>}
                overflow="inside"
                closeOnClickOutside={false}
                onClose={() => setPlantsModalOpened(false)}
                opened={plantsModalOpened}>
                <Group align="flex-start">
                    {suitablePlants.map((plant, index) => (
                        <Paper
                            p="1rem"
                            withBorder
                            shadow="lg"
                            key={index}>
                            <Stack
                                style={{ width: "min(300px,90vw)" }}>
                                <Title order={3}> {plant.name} </Title>
                                <img
                                    className='suitable-plant-image'
                                    src={plant.image}
                                    alt={plant.name} />
                                <Text>
                                    {plant.description}
                                </Text>
                            </Stack>
                        </Paper>
                    ))}
                </Group>
            </Modal>
        </>
    );
}
