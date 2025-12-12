'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Globe,
  Sparkles,
  Palette,
  MessageSquare,
  Users,
  Bot,
  Link2,
  FileText,
  X,
  Info,
  Loader2,
} from 'lucide-react';

// Wizard Steps
const STEPS = [
  { id: 1, name: 'Basics', icon: Globe, description: 'Business information' },
  { id: 2, name: 'Knowledge', icon: FileText, description: 'Train your bot' },
  { id: 3, name: 'Persona', icon: MessageSquare, description: 'Personality & tone' },
  { id: 4, name: 'Appearance', icon: Palette, description: 'Visual design' },
  { id: 5, name: 'Lead Capture', icon: Users, description: 'Capture visitor info' },
  { id: 6, name: 'Review', icon: Check, description: 'Review & launch' },
];

// Industry options
const INDUSTRIES = [
  { value: 'equipment-rental', label: 'Equipment Rental' },
  { value: 'construction', label: 'Construction' },
  { value: 'professional-services', label: 'Professional Services' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'real-estate', label: 'Real Estate' },
  { value: 'retail', label: 'Retail & E-commerce' },
  { value: 'restaurant', label: 'Restaurant & Hospitality' },
  { value: 'automotive', label: 'Automotive' },
  { value: 'fitness', label: 'Fitness & Wellness' },
  { value: 'other', label: 'Other' },
];

// Tone options
const TONES = [
  {
    value: 'professional',
    label: 'Professional',
    description: 'Formal and business-like',
    emoji: '👔',
  },
  {
    value: 'friendly',
    label: 'Friendly',
    description: 'Warm and approachable',
    emoji: '😊',
  },
  {
    value: 'playful',
    label: 'Playful',
    description: 'Fun and energetic',
    emoji: '🎉',
  },
  {
    value: 'luxury',
    label: 'Luxury',
    description: 'Sophisticated and premium',
    emoji: '✨',
  },
  {
    value: 'technical',
    label: 'Technical',
    description: 'Detailed and precise',
    emoji: '🔧',
  },
];

// Avatar options
const AVATAR_TYPES = [
  { value: 'orb', label: 'Animated Orb', preview: 'gradient' },
  { value: 'circle', label: 'Circle Icon', preview: 'icon' },
  { value: 'square', label: 'Square Icon', preview: 'square' },
  { value: 'custom', label: 'Custom Image', preview: 'custom' },
];

// Color presets
const COLOR_PRESETS = [
  { primary: '#3B82F6', accent: '#60A5FA', name: 'Blue' },
  { primary: '#10B981', accent: '#34D399', name: 'Green' },
  { primary: '#8B5CF6', accent: '#A78BFA', name: 'Purple' },
  { primary: '#F59E0B', accent: '#FBBF24', name: 'Orange' },
  { primary: '#EF4444', accent: '#F87171', name: 'Red' },
  { primary: '#EC4899', accent: '#F472B6', name: 'Pink' },
];

// Form data type
interface FormData {
  // Basics
  name: string;
  websiteUrl: string;
  industry: string;
  description: string;

  // Knowledge
  knowledgeSources: Array<{
    type: 'url' | 'text';
    value: string;
    status: 'pending' | 'processing' | 'done';
  }>;

  // Persona
  botName: string;
  tone: string;
  greetingMessage: string;
  fallbackMessage: string;

  // Appearance
  avatarType: string;
  primaryColor: string;
  accentColor: string;
  position: 'bottom-right' | 'bottom-left';

  // Lead Capture
  leadCaptureEnabled: boolean;
  leadCaptureFields: string[];
  leadCaptureMessage: string;
}

const initialFormData: FormData = {
  name: '',
  websiteUrl: '',
  industry: '',
  description: '',
  knowledgeSources: [],
  botName: 'AI Assistant',
  tone: 'friendly',
  greetingMessage: 'Hi! 👋 How can I help you today?',
  fallbackMessage: "I&apos;m not sure about that. Would you like me to connect you with our team?",
  avatarType: 'orb',
  primaryColor: '#3B82F6',
  accentColor: '#60A5FA',
  position: 'bottom-right',
  leadCaptureEnabled: true,
  leadCaptureFields: ['name', 'email'],
  leadCaptureMessage: "I&apos;d love to help you further! Could you share your contact info?",
};

export default function NewBotWizard() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Redirect to dashboard
    router.push('/agent-builder');
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => router.push('/agent-builder')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>
        <h1 className="text-3xl font-bold text-white">Create New Bot</h1>
        <p className="text-gray-400 mt-1">
          Set up your AI agent in just a few steps
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {STEPS.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                    ${
                      currentStep > step.id
                        ? 'bg-green-500 text-white'
                        : currentStep === step.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/5 text-gray-500'
                    }
                  `}
                >
                  {currentStep > step.id ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <span
                  className={`text-xs mt-2 hidden md:block ${
                    currentStep >= step.id ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  {step.name}
                </span>
              </div>
              {index < STEPS.length - 1 && (
                <div
                  className={`w-12 lg:w-24 h-0.5 mx-2 transition-colors duration-300 ${
                    currentStep > step.id ? 'bg-green-500' : 'bg-white/10'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white/[0.03] backdrop-blur-xl border border-white/5 rounded-2xl p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && (
              <BasicsStep formData={formData} updateFormData={updateFormData} />
            )}
            {currentStep === 2 && (
              <KnowledgeStep formData={formData} updateFormData={updateFormData} />
            )}
            {currentStep === 3 && (
              <PersonaStep formData={formData} updateFormData={updateFormData} />
            )}
            {currentStep === 4 && (
              <AppearanceStep formData={formData} updateFormData={updateFormData} />
            )}
            {currentStep === 5 && (
              <LeadCaptureStep formData={formData} updateFormData={updateFormData} />
            )}
            {currentStep === 6 && (
              <ReviewStep formData={formData} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              currentStep === 1
                ? 'text-gray-600 cursor-not-allowed'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {currentStep < STEPS.length ? (
            <button
              onClick={nextStep}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium transition-all duration-200"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium transition-all duration-200 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Create Bot
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Live Preview */}
      <div className="fixed bottom-6 right-6 z-50">
        <BotPreview formData={formData} />
      </div>
    </div>
  );
}

// Step 1: Basics
function BasicsStep({
  formData,
  updateFormData,
}: {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-1">Business Basics</h2>
        <p className="text-gray-400">Tell us about your business</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Bot Name *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => updateFormData({ name: e.target.value })}
            placeholder="e.g., St. George Rentals Assistant"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Website URL *
          </label>
          <div className="relative">
            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="url"
              value={formData.websiteUrl}
              onChange={(e) => updateFormData({ websiteUrl: e.target.value })}
              placeholder="https://yourwebsite.com"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            We&apos;ll use this to train your bot on your website content
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Industry
          </label>
          <select
            value={formData.industry}
            onChange={(e) => updateFormData({ industry: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500/50 transition-colors appearance-none cursor-pointer"
          >
            <option value="" className="bg-[#1a1a24]">Select your industry</option>
            {INDUSTRIES.map((industry) => (
              <option key={industry.value} value={industry.value} className="bg-[#1a1a24]">
                {industry.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Business Description (Optional)
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => updateFormData({ description: e.target.value })}
            placeholder="Briefly describe what your business does..."
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
          />
        </div>
      </div>
    </div>
  );
}

// Step 2: Knowledge
function KnowledgeStep({
  formData,
  updateFormData,
}: {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
}) {
  const [urlInput, setUrlInput] = useState('');
  const [textInput, setTextInput] = useState('');

  const addSource = (type: 'url' | 'text', value: string) => {
    if (!value.trim()) return;
    updateFormData({
      knowledgeSources: [
        ...formData.knowledgeSources,
        { type, value, status: 'pending' },
      ],
    });
    if (type === 'url') setUrlInput('');
    else setTextInput('');
  };

  const removeSource = (index: number) => {
    updateFormData({
      knowledgeSources: formData.knowledgeSources.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-1">Train Your Bot</h2>
        <p className="text-gray-400">Add content for your bot to learn from</p>
      </div>

      {/* Auto-scan from website */}
      {formData.websiteUrl && (
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <Sparkles className="w-4 h-4 text-blue-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Auto-scan your website</p>
              <p className="text-xs text-gray-400 mt-1">
                We&apos;ll automatically extract content from {formData.websiteUrl}
              </p>
            </div>
            <button
              onClick={() => addSource('url', formData.websiteUrl)}
              className="px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors"
            >
              Scan Website
            </button>
          </div>
        </div>
      )}

      {/* Add URL */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Add Additional URLs
        </label>
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://yourwebsite.com/page"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
            />
          </div>
          <button
            onClick={() => addSource('url', urlInput)}
            className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors"
          >
            Add
          </button>
        </div>
      </div>

      {/* Add Text */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Add Custom Knowledge
        </label>
        <textarea
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Add FAQs, product info, policies, or any other information you want your bot to know..."
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
        />
        <button
          onClick={() => addSource('text', textInput)}
          className="mt-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm transition-colors"
        >
          Add Text
        </button>
      </div>

      {/* Knowledge Sources List */}
      {formData.knowledgeSources.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Knowledge Sources ({formData.knowledgeSources.length})
          </label>
          <div className="space-y-2">
            {formData.knowledgeSources.map((source, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
              >
                {source.type === 'url' ? (
                  <Link2 className="w-4 h-4 text-blue-400" />
                ) : (
                  <FileText className="w-4 h-4 text-green-400" />
                )}
                <span className="flex-1 text-sm text-gray-300 truncate">
                  {source.value}
                </span>
                <button
                  onClick={() => removeSource(index)}
                  className="p-1 rounded hover:bg-white/10 text-gray-500 hover:text-red-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Step 3: Persona
function PersonaStep({
  formData,
  updateFormData,
}: {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-1">Bot Personality</h2>
        <p className="text-gray-400">Define how your bot communicates</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Bot Name
          </label>
          <input
            type="text"
            value={formData.botName}
            onChange={(e) => updateFormData({ botName: e.target.value })}
            placeholder="e.g., Atlas, Sarah, Helper"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Tone of Voice
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {TONES.map((tone) => (
              <button
                key={tone.value}
                onClick={() => updateFormData({ tone: tone.value })}
                className={`p-4 rounded-xl border transition-all duration-200 text-left ${
                  formData.tone === tone.value
                    ? 'bg-blue-500/10 border-blue-500/50'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <span className="text-2xl mb-2 block">{tone.emoji}</span>
                <p className="font-medium text-white">{tone.label}</p>
                <p className="text-xs text-gray-400">{tone.description}</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Greeting Message
          </label>
          <textarea
            value={formData.greetingMessage}
            onChange={(e) => updateFormData({ greetingMessage: e.target.value })}
            placeholder="Hi! How can I help you today?"
            rows={2}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Fallback Message
          </label>
          <textarea
            value={formData.fallbackMessage}
            onChange={(e) => updateFormData({ fallbackMessage: e.target.value })}
            placeholder="When the bot doesn&apos;t know the answer..."
            rows={2}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
          />
          <p className="text-xs text-gray-500 mt-1">
            This message appears when your bot can't find an answer
          </p>
        </div>
      </div>
    </div>
  );
}

// Step 4: Appearance
function AppearanceStep({
  formData,
  updateFormData,
}: {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-1">Visual Design</h2>
        <p className="text-gray-400">Customize how your bot looks</p>
      </div>

      <div className="space-y-6">
        {/* Avatar Type */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Avatar Style
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {AVATAR_TYPES.map((avatar) => (
              <button
                key={avatar.value}
                onClick={() => updateFormData({ avatarType: avatar.value })}
                className={`p-4 rounded-xl border transition-all duration-200 ${
                  formData.avatarType === avatar.value
                    ? 'bg-blue-500/10 border-blue-500/50'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div
                  className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      avatar.preview === 'gradient'
                        ? `linear-gradient(135deg, ${formData.primaryColor}, ${formData.accentColor})`
                        : formData.primaryColor,
                    borderRadius: avatar.preview === 'square' ? '12px' : '50%',
                  }}
                >
                  {avatar.preview !== 'gradient' && (
                    <Bot className="w-6 h-6 text-white" />
                  )}
                </div>
                <p className="text-sm font-medium text-white text-center">
                  {avatar.label}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Color Presets */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Color Theme
          </label>
          <div className="flex flex-wrap gap-3">
            {COLOR_PRESETS.map((preset) => (
              <button
                key={preset.name}
                onClick={() =>
                  updateFormData({
                    primaryColor: preset.primary,
                    accentColor: preset.accent,
                  })
                }
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-200 ${
                  formData.primaryColor === preset.primary
                    ? 'border-white/30 bg-white/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div
                  className="w-6 h-6 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${preset.primary}, ${preset.accent})`,
                  }}
                />
                <span className="text-sm text-white">{preset.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Custom Colors */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Primary Color
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={formData.primaryColor}
                onChange={(e) => updateFormData({ primaryColor: e.target.value })}
                className="w-12 h-12 rounded-lg cursor-pointer bg-transparent"
              />
              <input
                type="text"
                value={formData.primaryColor}
                onChange={(e) => updateFormData({ primaryColor: e.target.value })}
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-blue-500/50"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Accent Color
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={formData.accentColor}
                onChange={(e) => updateFormData({ accentColor: e.target.value })}
                className="w-12 h-12 rounded-lg cursor-pointer bg-transparent"
              />
              <input
                type="text"
                value={formData.accentColor}
                onChange={(e) => updateFormData({ accentColor: e.target.value })}
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-blue-500/50"
              />
            </div>
          </div>
        </div>

        {/* Position */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Widget Position
          </label>
          <div className="flex gap-3">
            {['bottom-right', 'bottom-left'].map((pos) => (
              <button
                key={pos}
                onClick={() =>
                  updateFormData({ position: pos as 'bottom-right' | 'bottom-left' })
                }
                className={`flex-1 p-4 rounded-xl border transition-all duration-200 ${
                  formData.position === pos
                    ? 'bg-blue-500/10 border-blue-500/50'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <p className="text-sm font-medium text-white capitalize">
                  {pos.replace('-', ' ')}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 5: Lead Capture
function LeadCaptureStep({
  formData,
  updateFormData,
}: {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
}) {
  const toggleField = (field: string) => {
    const fields = formData.leadCaptureFields.includes(field)
      ? formData.leadCaptureFields.filter((f) => f !== field)
      : [...formData.leadCaptureFields, field];
    updateFormData({ leadCaptureFields: fields });
  };

  const availableFields = ['name', 'email', 'phone', 'company'];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-1">Lead Capture</h2>
        <p className="text-gray-400">Collect visitor information</p>
      </div>

      <div className="space-y-6">
        {/* Enable/Disable */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
          <div>
            <p className="font-medium text-white">Enable Lead Capture</p>
            <p className="text-sm text-gray-400">
              Collect visitor contact information during conversations
            </p>
          </div>
          <button
            onClick={() =>
              updateFormData({ leadCaptureEnabled: !formData.leadCaptureEnabled })
            }
            className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
              formData.leadCaptureEnabled ? 'bg-blue-500' : 'bg-white/10'
            }`}
          >
            <div
              className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform duration-200 ${
                formData.leadCaptureEnabled ? 'left-8' : 'left-1'
              }`}
            />
          </button>
        </div>

        {formData.leadCaptureEnabled && (
          <>
            {/* Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Information to Collect
              </label>
              <div className="flex flex-wrap gap-2">
                {availableFields.map((field) => (
                  <button
                    key={field}
                    onClick={() => toggleField(field)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-200 capitalize ${
                      formData.leadCaptureFields.includes(field)
                        ? 'bg-blue-500/10 border-blue-500/50 text-blue-400'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                    }`}
                  >
                    {field}
                  </button>
                ))}
              </div>
            </div>

            {/* Lead Capture Message */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Lead Capture Message
              </label>
              <textarea
                value={formData.leadCaptureMessage}
                onChange={(e) =>
                  updateFormData({ leadCaptureMessage: e.target.value })
                }
                placeholder="Message shown when asking for contact info..."
                rows={2}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Step 6: Review
function ReviewStep({ formData }: { formData: FormData }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-1">Review & Launch</h2>
        <p className="text-gray-400">Make sure everything looks good</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basics */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-sm font-medium text-gray-400 mb-3">Basics</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Name</span>
              <span className="text-white">{formData.name || 'Not set'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Website</span>
              <span className="text-white truncate max-w-[200px]">
                {formData.websiteUrl || 'Not set'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Industry</span>
              <span className="text-white capitalize">
                {formData.industry?.replace('-', ' ') || 'Not set'}
              </span>
            </div>
          </div>
        </div>

        {/* Knowledge */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-sm font-medium text-gray-400 mb-3">Knowledge</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Sources</span>
              <span className="text-white">{formData.knowledgeSources.length}</span>
            </div>
          </div>
        </div>

        {/* Persona */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-sm font-medium text-gray-400 mb-3">Persona</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Bot Name</span>
              <span className="text-white">{formData.botName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Tone</span>
              <span className="text-white capitalize">{formData.tone}</span>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-sm font-medium text-gray-400 mb-3">Appearance</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Colors</span>
              <div className="flex gap-1">
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ background: formData.primaryColor }}
                />
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ background: formData.accentColor }}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Position</span>
              <span className="text-white capitalize">
                {formData.position.replace('-', ' ')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex gap-3">
        <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-white font-medium">Ready to launch!</p>
          <p className="text-sm text-gray-400 mt-1">
            After creating your bot, you'll get an embed code to add to your website.
            Your bot will start learning from your content immediately.
          </p>
        </div>
      </div>
    </div>
  );
}

// Bot Preview Component
function BotPreview({ formData }: { formData: FormData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${formData.position === 'bottom-left' ? 'left-6' : ''}`}>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute bottom-20 right-0 w-80 rounded-2xl shadow-2xl overflow-hidden"
            style={{
              background: '#1a1a24',
              border: `1px solid ${formData.primaryColor}30`,
            }}
          >
            {/* Header */}
            <div
              className="p-4 flex items-center gap-3"
              style={{
                background: `linear-gradient(135deg, ${formData.primaryColor}20, ${formData.accentColor}20)`,
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${formData.primaryColor}, ${formData.accentColor})`,
                }}
              >
                {formData.avatarType === 'orb' ? (
                  <div className="w-full h-full rounded-full animate-pulse" />
                ) : (
                  <Bot className="w-5 h-5 text-white" />
                )}
              </div>
              <div>
                <p className="font-medium text-white">{formData.botName}</p>
                <p className="text-xs text-gray-400">Online</p>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 h-48 flex flex-col justify-end">
              <div
                className="p-3 rounded-2xl rounded-bl-none max-w-[85%]"
                style={{ background: `${formData.primaryColor}20` }}
              >
                <p className="text-sm text-white">{formData.greetingMessage}</p>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none"
                  disabled
                />
                <button
                  className="p-2 rounded-xl"
                  style={{ background: formData.primaryColor }}
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${formData.primaryColor}, ${formData.accentColor})`,
        }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageSquare className="w-6 h-6 text-white" />
        )}
      </motion.button>
    </div>
  );
}
