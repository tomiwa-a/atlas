# ATLAS - Adaptive Learning and Tutoring System

## About ATLAS

ATLAS is an AI-powered adaptive learning and tutoring system designed to provide trustworthy, factually grounded, and personalized education. It adapts to both what a user knows and their preferred learning style, eliminating guesswork through Retrieval-Augmented Generation (RAG) and real-time assessments.

### How It Works

The core functionality revolves around the Adaptive Learning Loop:

1. **Input**: User selects a subject and sets style preferences (e.g., Casual/Analogies, Formal/Academic, Hands-on).
2. **Generation**: The Content Generation Engine produces customized lessons with multimodal content.
3. **Consumption**: User engages with the lesson.
4. **Assessment**: A targeted quiz evaluates understanding.
5. **Adaptation**: Based on performance, the system updates mastery scores and adjusts the learning path—advancing on success or providing remedial content on struggle.

This ensures optimal, personalized learning experiences.

## Tech Stack

- **Frontend**: React.JS, Tailwind CSS, Shadcn/ui
- **Backend**: Python (FastAPI or Flask)
- **Database**: Firestore (Firebase)
- **Vector DB**: Pinecone/Weaviate/PgVector
- **AI**: LangChain/LlamaIndex, Gemini/Claude/GPT-4o, DALL-E/Imagen

## Pages (Initial MVP)

- **Home**: Hero section, feature overview, call-to-action for sign-up
- **Contact**: Form for inquiries, contact info
- **Pricing**: Subscription tiers (Standard, Power User), API key override details

## Modules

- **Adaptive Learning Loop**: Handles subject selection, style preferences, content generation, consumption, assessment, and adaptation based on user performance.
- **Content Generation Engine**: Uses LLM + RAG to produce structured, style-customized lessons with multimodal content (text, diagrams).
- **Assessment Engine**: Generates targeted quizzes (MCQ, fill-in-the-blank, short answer) aligned with lesson content.
- **Adaptive Path Engine**: Updates mastery scores and dictates next steps (advance or remedial lessons).
- **User Management**: Handles profiles, progress tracking, style preferences, and monetization (subscriptions/API keys).
- **Security Module**: Ensures RAG grounding, API key encryption, and Firebase security rules for data integrity.
