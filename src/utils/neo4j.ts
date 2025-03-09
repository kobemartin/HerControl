import neo4j, { Driver } from 'neo4j-driver';

let driver: Driver;

export const initNeo4j = () => {
  const uri = import.meta.env.VITE_NEO4J_URI;
  const user = import.meta.env.VITE_NEO4J_USER;
  const password = import.meta.env.VITE_NEO4J_PASSWORD;

  if (!uri || !user || !password) {
    throw new Error('Missing Neo4j credentials in environment variables');
  }

  driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
};

export const findRecommendationsBySymptoms = async (symptoms: string[]) => {
  const session = driver.session();
  try {
    const result = await session.run(
      `
      MATCH (r:Recommendation)
      WHERE any(symptom IN $symptoms WHERE symptom IN r.targetSymptoms)
      RETURN r.title, r.description, r.type
      ORDER BY size([x IN $symptoms WHERE x IN r.targetSymptoms]) DESC
      LIMIT 3
      `,
      { symptoms }
    );
    
    return result.records.map(record => ({
      title: record.get('r.title'),
      description: record.get('r.description'),
      type: record.get('r.type')
    }));
  } finally {
    await session.close();
  }
};

export const closeNeo4jConnection = () => {
  if (driver) {
    driver.close();
  }
}; 