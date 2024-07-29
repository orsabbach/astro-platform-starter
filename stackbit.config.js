import { ContentfulContentSource } from "@stackbit/cms-contentful";

export default {
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID, // Replace with your Contentful space ID
      environment: process.env.CONTENTFUL_ENVIRONMENT || 'master', // Set default environment if needed
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN, // Set your preview token
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN // Set your management token
    })
  ]
};
