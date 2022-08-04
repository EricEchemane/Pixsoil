import { Table, Text } from '@mantine/core';
import { soil_properties as soil_props } from 'model/soil_properties';
import React from 'react';

export default function Result(result: {
    soil_type: string;
    accuracy_score_rounded: string;
    accuracy_score: number;
    classifying: boolean;
}) {


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
                            return <tr key={index}>
                                <td>{prop[0]}</td>
                                <td>{prop[1]}</td>
                            </tr>;
                        })
                    }
                </tbody>
            </Table>
        </>
    );
}
