# MPA Auth Demo

This starter kit shows how to do Multi Tenant App with Pocketpages

This is based on the auth templates.

- Tenants tables
- Users link to a tenant now
- Tenant is required in the basepath of the URL. IE: `example.com/tenanta`

## Email

Run mailhog `docker run -p 1025:1025 -p 8025:8025 mailhog/mailhog`

Then you can access the emails at `http://localhost:8025`