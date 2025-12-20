import connectDB from '../lib/mongodb';
import Project from '../models/Project';

/**
 * Script to check all project categories and their Arabic values
 */
const checkCategories = async () => {
  try {
    await connectDB();
    console.log('Connected to MongoDB\n');

    const projects = await Project.find({}).sort({ category: 1 });

    console.log('📋 All Projects with their categories:\n');

    // Group by category
    const categories = new Map<string, any[]>();

    projects.forEach(project => {
      if (!categories.has(project.category)) {
        categories.set(project.category, []);
      }
      categories.get(project.category)?.push(project);
    });

    // Display grouped by category
    categories.forEach((projs, cat) => {
      console.log(`\n${'='.repeat(60)}`);
      console.log(`Category: ${cat}`);
      console.log(`${'='.repeat(60)}`);

      projs.forEach((project, index) => {
        console.log(`\n${index + 1}. Title: ${project.title}`);
        console.log(`   Title (AR): ${project.titleAr}`);
        console.log(`   category: "${project.category}"`);
        console.log(`   categoryAr: "${project.categoryAr}"`);
        console.log(`   categoryAr (hex): ${Buffer.from(project.categoryAr).toString('hex')}`);
      });
    });

    console.log('\n\n📊 Summary:');
    console.log(`Total projects: ${projects.length}`);
    categories.forEach((projs, cat) => {
      const arCats = [...new Set(projs.map(p => p.categoryAr))];
      console.log(`\n${cat}:`);
      console.log(`  Count: ${projs.length}`);
      console.log(`  Arabic values: ${arCats.join(', ')}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

checkCategories();
