// import { Request, Response } from "express";
// import { createClient } from '@supabase/supabase-js';

const { createClient } = require('@supabase/supabase-js');

const express = require("express");
const bodyParser = require('body-parser');


const app = express();
// Use JSON body parser middleware
app.use(bodyParser.json());


const port = process.env.PORT || 3001;



// Create a single supabase client for interacting with your database
const supabase = createClient('https://ljbnqgogykskettvuhrb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqYm5xZ29neWtza2V0dHZ1aHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4MjgyMzksImV4cCI6MjAxNDQwNDIzOX0.gcWU3Nqhb6gxbrWXt5Cde_D2CRbcy5DTjrmZLasfFBY');

// const { data, error } = await supabase.auth.getSession();
// https://supabase.com/docs/reference/javascript/installing

// GET /api/

// npm install ts-node --save-dev
// npx ts-node app.ts

app.get('/api/v1/journal', async (req, res) => {
  // Let's GET all journal entries from the journal table of DB

  const { data, error } = await supabase
    .from('journal')
    .select();

  if (data) {
    res.json(data);
  }

  if (error) {
    res.status(500).json({ error: error.message });
  }
});

// // POST /api/
// app.POST('/api/v1/journal', (req: Request, res: Response) => {
//   res.json({});
// });

// // PUT /api/
// app.PUT('/api/v1/journal', (req: Request, res: Response) => {
//   res.json({});
// });

// // DELETE /api
// app.DELETE('/api/v1/journal:id', (req: Request, res: Response) => {
//   const { id } = req.params;
//   res.json({});
// });

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

/*
  Objectives:
  Map Google Data with Dayly Photos

  Journal Entry - Model
  id
  title
  entry
  photos = [abc123, ...]
  date_created
  last_edited
  allday

  GET
  /api/[version #]/journal

  POST
  /api/[version #]/

  PUT
  /api/[version #]/journal

  DELETE
  /api/[version #]/journal



*/
