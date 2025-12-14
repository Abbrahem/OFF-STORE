const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://abrahemelgazaly2:abrahem88@cluster0.75hmy3n.mongodb.net/offstore?retryWrites=true&w=majority&appName=Cluster0';

async function seedAdmin() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db('offstore');
    
    // Create admin
    const adminData = {
      email: 'admin@offstore.com',
      password: 'admin123',
      createdAt: new Date()
    };
    
    // Check if admin exists
    const existing = await db.collection('admins').findOne({ email: adminData.email });
    
    if (existing) {
      console.log('Admin already exists');
    } else {
      await db.collection('admins').insertOne(adminData);
      console.log('Admin created successfully!');
      console.log('Email: admin@offstore.com');
      console.log('Password: admin123');
    }
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
    process.exit(0);
  }
}

seedAdmin();
