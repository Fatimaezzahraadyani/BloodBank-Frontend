import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Chief Medical Officer',
      bio: 'Leading our medical team with 20+ years of experience in transfusion medicine'
    },
    {
      name: 'Michael Chen',
      title: 'Executive Director',
      bio: 'Overseeing operations and strategic partnerships across our network'
    },
    {
      name: 'Dr. Maria Rodriguez',
      title: 'Director of Quality',
      bio: 'Ensuring the highest safety standards in all our processes'
    }
  ];

  impactStats = [
    { value: '50,000+', label: 'Lives Saved', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
    { value: '125,000+', label: 'Blood Donations', icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' },
    { value: '150+', label: 'Partner Hospitals', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5V11h-2v6.5zm-2.5-12c1.38 0 2.5 1.12 2.5 2.5S10.88 11.5 9.5 11.5 7 10.38 7 9s1.12-2.5 2.5-2.5zM12 17.5V11h-2v6.5zm-2.5-12c1.38 0 2.5 1.12 2.5 2.5S10.88 11.5 9.5 11.5 7 10.38 7 9s1.12-2.5 2.5-2.5z' },
    { value: '25+', label: 'Years of Service', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' }
  ];

  values = [
    { title: 'Compassion', description: 'We believe in the power of human kindness and the importance of helping others in need.', icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' },
    { title: 'Safety', description: 'We maintain the highest safety standards in blood collection, testing, and distribution.', icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 13.5v-2h2v2h-2zm0-4v-4h2v4h-2z' },
    { title: 'Community', description: 'We build strong relationships with donors, hospitals, and communities we serve.', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
    { title: 'Reliability', description: 'We ensure blood is available when and where it\'s needed most, 24/7.', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.5 14.5v-7h1v7h-1z' }
  ];

  historyTimeline = [
    { year: 1999, title: 'Foundation', description: 'BloodLife was founded with a simple mission: to ensure no patient goes without the blood they need. Starting with just 3 partner hospitals and 100 donors.' },
    { year: 2005, title: 'Digital Innovation', description: 'Launched our first digital platform, revolutionizing how donors connect with blood banks and making the donation process more efficient and transparent.' },
    { year: 2015, title: 'National Expansion', description: 'Expanded our network to serve the entire nation, partnering with over 100 hospitals and registering more than 10,000 active donors.' },
    { year: 2024, title: 'Modern Platform', description: 'Launched our new comprehensive platform with real-time inventory tracking, multi-language support, and advanced donor management features.' }
  ];
}