# Configuration Files

This directory contains configuration files for various aspects of the Come Outside website.

## Testimonials Configuration

The `testimonials.ts` file contains all testimonials displayed on the website. This configuration is used by:

1. The testimonial carousel on the homepage
2. The testimonials section on the About Us page

### How to Use

The testimonials are stored as an array of objects with the following structure:

```typescript
interface Testimonial {
  quote: string;    // The testimonial text
  name: string;     // The name of the person giving the testimonial
  since: string;    // The year they joined Come Outside
  image: string;    // URL to their profile image
}
```

### Adding a New Testimonial

To add a new testimonial:

1. Open `testimonials.ts`
2. Add a new object to the array following the structure above
3. Save the file

Example:

```typescript
{
  quote: "Your testimonial text here",
  name: "Person's Name",
  since: "2023",
  image: "https://images.unsplash.com/photo-example"
}
```

### Editing Existing Testimonials

To edit an existing testimonial, simply find the testimonial in the array and modify its properties.

### Removing Testimonials

To remove a testimonial, delete its entire object from the array.

### Changing the Order

The order of testimonials in the array determines their display order. The testimonial carousel displays testimonials in groups of 3 per slide, in the order they appear in the array.

### Image Guidelines

- Use high-quality images with good lighting
- Square or portrait orientation works best
- Recommended size: at least 200x200 pixels
- For consistency, consider using Unsplash images with similar style

## Notes

- The AboutUs page displays only the first 3 testimonials from the configuration
- The homepage testimonial carousel displays all testimonials in groups of 3
