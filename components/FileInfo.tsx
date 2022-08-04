import { Table, Text } from '@mantine/core';
import React from 'react';

export default function FileInfo({ file }: { file: any; }) {

    if (!file) return <Text> File Info: no file is selected </Text>;
    return (
        <div>
            <Text weight={700} mb={10}> File Info: </Text>
            <Table>
                <tbody>
                    <tr>
                        <td>Path</td>
                        <td> {file.path} </td>
                    </tr>
                    <tr>
                        <td>File size</td>
                        <td> {file.size} bytes </td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td> {file.type} </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}