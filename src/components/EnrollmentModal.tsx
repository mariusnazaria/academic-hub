'use client';

import { useState } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './Button';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
}

export default function EnrollmentModal({ isOpen, onClose, courseTitle }: EnrollmentModalProps) {
  const [formData, setFormData] = useState({
    nume: '',
    email: '',
    telefon: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nume.trim()) {
      newErrors.nume = 'Numele este obligatoriu';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email-ul nu este valid';
    }
    
    if (!formData.telefon.trim()) {
      newErrors.telefon = 'Telefonul este obligatoriu';
    } else if (!/^[\+]?[0-9\s\-\(\)]{8,}$/.test(formData.telefon)) {
      newErrors.telefon = 'Telefonul nu este valid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          course: courseTitle,
          date: new Date().toISOString(),
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setFormData({ nume: '', email: '', telefon: '' });
        }, 3000);
      } else {
        throw new Error('Eroare la trimiterea formularului');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors({ submit: 'A apărut o eroare. Vă rugăm să încercați din nou.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Înscriere la {courseTitle}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {isSubmitted ? (
          /* Success Message */
          <div className="p-6 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Înscrierea a fost trimisă cu succes!
            </h3>
            <p className="text-gray-600 mb-4">
              Vă vom contacta în curând pentru confirmarea detaliilor.
            </p>
            <Button onClick={onClose} variant="primary">
              Închide
            </Button>
          </div>
        ) : (
          /* Enrollment Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label htmlFor="nume" className="block text-sm font-medium text-gray-700 mb-1">
                Nume și Prenume *
              </label>
              <input
                type="text"
                id="nume"
                name="nume"
                value={formData.nume}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.nume ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Introduceți numele complet"
              />
              {errors.nume && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.nume}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="exemplu@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-1">
                Telefon *
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                value={formData.telefon}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.telefon ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="+373 61 221 666"
              />
              {errors.telefon && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.telefon}
                </p>
              )}
            </div>

            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.submit}
                </p>
              </div>
            )}

            <div className="pt-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Se trimite...' : 'Trimite Înscrierea'}
              </Button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              Prin trimiterea acestui formular, sunteți de acord cu{' '}
              <a href="/termeni" className="text-green-600 hover:underline">
                termenii și condițiile
              </a>{' '}
              noastre.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
