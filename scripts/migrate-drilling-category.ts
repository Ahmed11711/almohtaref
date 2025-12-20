import connectDB from '../lib/mongodb';
import Project from '../models/Project';

/**
 * Migration script to update categoryAr for drilling projects
 * Changes 'حفر' to 'تخريم' to match the filter categoryMap
 */
const migrateDrillingCategory = async () => {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    // Find all drilling projects with the old Arabic category
    const result = await Project.updateMany(
      {
        category: 'Drilling',
        categoryAr: 'حفر'
      },
      {
        $set: { categoryAr: 'تخريم' }
      }
    );

    console.log(`✅ Migration completed!`);
    console.log(`   Updated ${result.modifiedCount} project(s)`);
    console.log(`   Changed categoryAr from 'حفر' to 'تخريم' for drilling projects`);

    // Verify the update
    const drillingProjects = await Project.find({ category: 'Drilling' });
    console.log('\n📋 Current drilling projects:');
    drillingProjects.forEach((project, index) => {
      console.log(`   ${index + 1}. ${project.title} - categoryAr: ${project.categoryAr}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error during migration:', error);
    process.exit(1);
  }
};

migrateDrillingCategory();
