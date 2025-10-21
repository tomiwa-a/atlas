import React, { useState } from 'react';
import { Modal } from './ui/modal';
import { DropdownMenu, DropdownMenuItem } from './ui/dropdown';

interface AddApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (provider: string, key: string) => void;
  editingKey?: { provider: string; key: string; id: string };
}

export const AddApiKeyModal: React.FC<AddApiKeyModalProps> = ({
  isOpen,
  onClose,
  onSave,
  editingKey
}) => {
  const [provider, setProvider] = useState(editingKey?.provider || 'openai');
  const [apiKey, setApiKey] = useState(editingKey?.key || '');

  const handleSave = () => {
    if (provider && apiKey) {
      onSave(provider, apiKey);
      setProvider('openai');
      setApiKey('');
      onClose();
    }
  };

  const handleClose = () => {
    setProvider('openai');
    setApiKey('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={editingKey ? 'Edit API Key' : 'Add API Key'}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-base font-medium mb-2">Provider</label>
          <DropdownMenu
            value={provider}
            onValueChange={setProvider}
            placeholder="Select provider"
          >
            <DropdownMenuItem value="openai">OpenAI</DropdownMenuItem>
            <DropdownMenuItem value="gemini">Gemini</DropdownMenuItem>
          </DropdownMenu>
        </div>

        <div>
          <label className="block text-base font-medium mb-2">API Key</label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your API key"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white"
          />
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition"
          >
            {editingKey ? 'Update' : 'Add'} Key
          </button>
        </div>
      </div>
    </Modal>
  );
};