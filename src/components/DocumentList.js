// src/components/DocumentList.js

import React from 'react';
import { Typography, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DocumentList = ({ documents, onDelete }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Uploaded Documents
      </Typography>
      {documents.length > 0 ? (
        <List>
          {documents.map((doc, index) => (
            <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <ListItemText primary={doc.name} secondary={doc.type} />
              <IconButton edge="end" onClick={() => onDelete(doc.name)}>
                <DeleteIcon color="error" />
              </IconButton>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">No documents uploaded yet.</Typography>
      )}
    </div>
  );
};

export default DocumentList;