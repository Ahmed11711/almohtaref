import connectDB from '../lib/mongodb';
import { processAllBlogs } from '../lib/blog-processor';

async function main() {
    try {
        await connectDB();
        console.log('Connected to DB');
        const count = await processAllBlogs();
        console.log(`Successfully reprocessed ${count} blogs.`);
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

main();
