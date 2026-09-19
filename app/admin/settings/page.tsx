import React from "react";
import { Sliders, Cpu, MessageSquare, Shield, Key } from "lucide-react";

export const metadata = {
  title: "System Settings — Admin Portal",
};

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
          System & AI Engine Configurations
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 mt-1">
          Manage backend AI reasoning models, WhatsApp Webhooks, and rate limit rules.
        </p>
      </div>

      <div className="space-y-6">
        {/* AI Model Architecture */}
        <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-100 text-amber-900">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-zinc-950">Active AI Models & Embeddings</h2>
              <p className="text-xs text-zinc-500">Select default models for resume tailoring and job matching</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl border-2 border-[#f0b100] bg-amber-50/40">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-amber-900 uppercase">Primary LLM</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <h3 className="font-bold text-sm text-zinc-950 mt-1">Claude 3.5 Sonnet</h3>
              <p className="text-xs text-zinc-600 mt-1">Used for ATS resume customization</p>
            </div>

            <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-zinc-500 uppercase">Embedding</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <h3 className="font-bold text-sm text-zinc-950 mt-1">text-embedding-3-large</h3>
              <p className="text-xs text-zinc-600 mt-1">Semantic job match search</p>
            </div>

            <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-zinc-500 uppercase">Fallback LLM</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <h3 className="font-bold text-sm text-zinc-950 mt-1">GPT-4o Mini</h3>
              <p className="text-xs text-zinc-600 mt-1">Fast categorization & filters</p>
            </div>
          </div>
        </div>

        {/* WhatsApp & Alerts Integration */}
        <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-900">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-zinc-950">WhatsApp Business Cloud API</h2>
              <p className="text-xs text-zinc-500">Real-time candidate alert dispatch status</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="text-sm font-bold text-zinc-900">Official Meta Cloud Webhook</p>
              <p className="text-xs text-zinc-500">Webhook verified: https://api.jobfirst.ai/webhooks/whatsapp</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
              Connected
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
