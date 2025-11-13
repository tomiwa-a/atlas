import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft, FaPlus, FaEdit, FaTrash, FaSave, FaEye, FaShare, FaCoins } from 'react-icons/fa';

interface Section {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  tips?: string[];
  quiz?: {
    question: string;
    options: string[];
    correctAnswer: number;
  };
}

const TutorialEditor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock tutorial data - in real app, fetch by id
  const [tutorial, setTutorial] = useState({
    id: id || 'new',
    title: 'React Hooks Fundamentals',
    description: 'A comprehensive guide to understanding and using React Hooks effectively.',
    difficulty: 'intermediate',
    sections: [
      {
        id: 'intro',
        title: 'Introduction to React Hooks',
        content: 'React Hooks are functions that let you "hook into" React state and lifecycle features from function components.',
        codeExample: `import React, { useState } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n  return <div>{count}</div>;\n}`,
        tips: ['Hooks can only be called at the top level', 'Use hooks in React functions only']
      }
    ] as Section[],
    status: 'draft',
    tokensUsed: 25
  });

  const [currentSection, setCurrentSection] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Section | null>(null);

  const addSection = () => {
    const newSection: Section = {
      id: `section-${Date.now()}`,
      title: 'New Section',
      content: 'Add your content here...'
    };
    setTutorial(prev => ({
      ...prev,
      sections: [...prev.sections, newSection]
    }));
    setCurrentSection(tutorial.sections.length);
    setEditData(newSection);
    setIsEditing(true);
  };

  const editSection = (section: Section) => {
    setEditData({ ...section });
    setIsEditing(true);
  };

  const saveSection = () => {
    if (!editData) return;
    setTutorial(prev => ({
      ...prev,
      sections: prev.sections.map(s => s.id === editData.id ? editData : s)
    }));
    setIsEditing(false);
    setEditData(null);
  };

  const deleteSection = (sectionId: string) => {
    setTutorial(prev => ({
      ...prev,
      sections: prev.sections.filter(s => s.id !== sectionId)
    }));
    if (currentSection >= tutorial.sections.length - 1) {
      setCurrentSection(Math.max(0, tutorial.sections.length - 2));
    }
  };

  const publishCourse = () => {
    // In real app, API call
    setTutorial(prev => ({ ...prev, status: 'published' }));
    alert('Course published successfully!');
  };

  const currentSectionData = tutorial.sections[currentSection];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <Link
              to="/dashboard/library"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
            >
              <FaArrowLeft /> Back to Library
            </Link>
            <h1 className="text-3xl font-bold mb-2">{tutorial.title}</h1>
            <p className="text-gray-600 text-lg mb-4">{tutorial.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                tutorial.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {tutorial.status === 'published' ? 'Published' : 'Draft'}
              </span>
              <span>Sections: {tutorial.sections.length}</span>
              <span className="flex items-center gap-1">
                <FaCoins /> {tutorial.tokensUsed} tokens used
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
              <FaEye /> Preview
            </button>
            <button
              onClick={publishCourse}
              disabled={tutorial.status === 'published'}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:opacity-90 disabled:opacity-50"
            >
              <FaShare /> Publish
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:opacity-90">
              <FaSave /> Save Draft
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Sections */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Sections</h3>
              <button
                onClick={addSection}
                className="flex items-center gap-2 px-3 py-1 bg-primary text-white rounded text-sm hover:opacity-90"
              >
                <FaPlus /> Add
              </button>
            </div>
            <nav className="space-y-2">
              {tutorial.sections.map((section, index) => (
                <div key={section.id} className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentSection(index)}
                    className={`flex-1 text-left px-3 py-2 rounded-lg transition-colors ${
                      currentSection === index
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-sm">{section.title}</span>
                  </button>
                  <button
                    onClick={() => editSection(section)}
                    className="p-1 text-gray-400 hover:text-gray-600"
                  >
                    <FaEdit className="text-xs" />
                  </button>
                  <button
                    onClick={() => deleteSection(section.id)}
                    className="p-1 text-red-400 hover:text-red-600"
                  >
                    <FaTrash className="text-xs" />
                  </button>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            {isEditing && editData ? (
              /* Edit Mode */
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Edit Section</h2>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={saveSection}
                      className="px-4 py-2 bg-primary text-white rounded hover:opacity-90"
                    >
                      Save
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <input
                      type="text"
                      value={editData.title}
                      onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Content</label>
                    <textarea
                      value={editData.content}
                      onChange={(e) => setEditData({ ...editData, content: e.target.value })}
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Code Example (Optional)</label>
                    <textarea
                      value={editData.codeExample || ''}
                      onChange={(e) => setEditData({ ...editData, codeExample: e.target.value })}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded font-mono text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Add code example..."
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* View Mode */
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">{currentSectionData.title}</h2>
                </div>

                <div className="space-y-6">
                  <div className="prose max-w-none">
                    {currentSectionData.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {currentSectionData.codeExample && (
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-gray-100 text-sm overflow-x-auto">
                        <code>{currentSectionData.codeExample}</code>
                      </pre>
                    </div>
                  )}

                  {currentSectionData.tips && currentSectionData.tips.length > 0 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-3">Pro Tips</h4>
                      <ul className="space-y-2">
                        {currentSectionData.tips.map((tip, index) => (
                          <li key={index} className="flex items-start gap-2 text-blue-800">
                            <span className="text-blue-600 mt-1">•</span>
                            <span className="text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialEditor;