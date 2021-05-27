
import React from "react";


import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


import Link from 'next/link';


const notes = [
    { name: 'my-note' },
    { name: 'my-note2' },
    { name: 'my-note3' },
];

const Notes = () => {


return <div>
    <Typography variant="h2">
        notes pages
        </Typography>
    <TableContainer>
        <Table>
            <TableBody>
                {notes.map((note, i) => {
                    return <TableRow>
                        <TableCell>
                            <div key={i}>
                                <Link as={"/notes/" + note.name} href="/notes/[note]">
                                    <a>{note.name}</a>
                                </Link>
                            </div>
                        </TableCell>
                        <TableCell>
                            <Button variant="contained" color="secondary">Delete</Button>
                        </TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
</div>
};

export default Notes;
