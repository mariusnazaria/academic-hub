'use client';

import { useState } from 'react';
import { Clock, Users, BookOpen, Star } from 'lucide-react';
import Button from './Button';

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  schedule: string;
  maxStudents: number;
  subjects: string[];
  features: string[];
  onEnroll: (courseTitle: string) => void;
}

export default function CourseCard({
  title,
  description,
  price,
  duration,
  schedule,
  maxStudents,
  subjects,
  features,
  onEnroll,
}: CourseCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col ${
        isHovered ? 'shadow-xl transform -translate-y-1' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-green-100 text-sm">{description}</p>
      </div>

      {/* Price */}
      <div className="p-6 border-b border-gray-100">
        <div className="text-center">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 ml-2">/ curs</span>
        </div>
      </div>

      {/* Course Details */}
      <div className="p-6 space-y-4 flex-grow">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="w-4 h-4 text-green-500" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Users className="w-4 h-4 text-green-500" />
            <span>Max {maxStudents} elevi</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-gray-600">
            <BookOpen className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium">Program:</span>
          </div>
          <p className="text-sm text-gray-700 ml-6">{schedule}</p>
        </div>

        {/* Subjects */}
        <div className="space-y-2">
          <span className="text-sm font-medium text-gray-700">Materii:</span>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <span className="text-sm font-medium text-gray-700">Ce include:</span>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                <Star className="w-3 h-3 text-green-500 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="p-6 pt-0 mt-auto">
        <Button
          onClick={() => onEnroll(title)}
          variant="primary"
          size="lg"
          className="w-full"
        >
          Înscrie-te Acum
        </Button>
      </div>
    </div>
  );
}
