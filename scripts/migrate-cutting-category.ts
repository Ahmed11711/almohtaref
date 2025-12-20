import connectDB from '../lib/mongodb';
import Project from '../models/Project';

/**
 * Migration script to update categoryAr for cutting projects
 * Changes 'قطع' to 'قص' to match the filter categoryMap
 */
const migrateCuttingCategory = async () => {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    // Find all cutting projects with the wrong Arabic category
    const result = await Project.updateMany(
      {
        category: 'Cutting',
        categoryAr: 'قطع'
      },
      {
        $set: { categoryAr: 'قص' }
      }
    );

    console.log(`✅ Migration completed!`);
    console.log(`   Updated ${result.modifiedCount} project(s)`);
    console.log(`   Changed categoryAr from 'قطع' to 'قص' for cutting projects`);

    // Verify the update
    const cuttingProjects = await Project.find({ category: 'Cutting' });
    console.log('\n📋 Current cutting projects:');
    cuttingProjects.forEach((project, index) => {
      console.log(`   ${index + 1}. ${project.title} - categoryAr: ${project.categoryAr}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error during migration:', error);
    process.exit(1);
  }
};

migrateCuttingCategory();
