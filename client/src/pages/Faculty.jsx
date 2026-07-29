import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStar, FaShieldAlt, FaUserShield, FaBookOpen, FaChalkboardTeacher, FaPencilAlt, FaGlobe, FaBuilding, FaPiggyBank, FaTrain, FaCheckCircle, FaRegCheckCircle, FaUniversity, FaHeartbeat, FaUsers, FaLandmark, FaAngleDoubleLeft, FaAngleDoubleRight, FaGraduationCap, FaChevronDown, FaChevronUp } from 'react-icons/fa';

import PopularExams from '../components/PopularExams';

const examCategories = [
  { name: 'SSC', icon: <FaUsers />, active: true },
  { name: 'Banking', icon: <FaUniversity />, active: false },
  { name: 'Railway', icon: <FaTrain />, active: false },
  { name: 'Defence & Police', icon: <FaShieldAlt />, active: false },
  { name: 'Government Exams', icon: <FaLandmark />, active: false }
];

const Faculty = () => {
  const [activeCategory, setActiveCategory] = useState('SSC');
  const [expandedExam, setExpandedExam] = useState(null);

  const sscExams = [
    { id: 1, title: 'SSC (CGL - TIER 1 & 2)', details: 'Detailed preparation for Combined Graduate Level Tier 1 and Tier 2 exams.' },
    { id: 2, title: 'CHSL (Combined Higher Secondary Level)', details: 'Comprehensive syllabus coverage for SSC CHSL.' },
    { id: 3, title: 'SSC MTS', details: 'SSC MTS', isList: true },
    { id: 4, title: 'SSC Pradhyapak', details: 'Information regarding the SSC Pradhyapak recruitment.' },
    { id: 5, title: 'Stenographer (Grades C and D)', details: 'Complete details and preparation strategy for the SSC Stenographer examination.' },
    { id: 6, title: 'SSC Common Entrance Test (CET)', details: 'Information about the upcoming SSC Common Entrance Test (CET) syllabus and pattern.' },
    { id: 7, title: 'SSC Translator', details: 'SSC Junior Hindi Translator', isList: true },
    { id: 8, title: 'SSC Sub Inspector (CPO)', details: 'Details about the SSC CPO examination for Sub Inspector posts in various central police organizations.' },
    { id: 9, title: 'SSC Constable (GD)', details: 'Information regarding the SSC General Duty Constable exam including physical and written test requirements.' },
    { id: 10, title: 'SSC Selection Post', details: 'A comprehensive guide to SSC Selection Post phase examinations and eligibility criteria.' },
    { id: 11, title: 'Bihar Staff Selection Commission (BSSC)', details: 'Details about the Bihar Staff Selection Commission exams, pattern, and dates.' },
    { id: 12, title: 'SSC Scientific Assistant', details: 'Information about the SSC Scientific Assistant examination in India Meteorological Department.' }
  ];

  const bankExams = [
    { 
      id: 'b1', 
      title: 'Bank PO/Clerical', 
      isGrid: true,
      listItems: [
        'SBI Junior Management Grade Scale - I', 'J&K Bank Apprentice', 'IBPS Clerk',
        'IBPS PO', 'SBI Clerk', 'SBI PO',
        'RBI Grade B', 'RBI Grade B (DEPR)', 'RBI Grade B (DSIM)',
        'IBPS RRB Office Assistant', 'IDBI Bank Executive', 'IBPS RRB Scale I',
        'Indian Bank Clerk', 'Nainital Bank', 'RBI Assistant',
        'Bank of Maharashtra Clerk', 'NABARD Development Assistant', 'NABARD (Assistant Manager Grade A & B)',
        'Jammu And Kashmir Bank Clerk', 'UCO Bank PO', 'Central Bank of India PO',
        'Indian Overseas Bank PO', 'Bank of India PO', 'SBI Apprentice',
        'Union Bank of India PO', 'Punjab National Bank PO', 'HPSCB Junior Clerk',
        'Export Credit Guarantee Corporation PO', 'Uttarakhand Co-operative Bank Junior Branch Manager', 'BSCB Assistant Multipurpose',
        'Punjab And Sind Bank Clerk', 'UCO Bank Clerk', 'Central Bank of India Clerk',
        'Indian Overseas Bank Clerk', 'Bank of India Clerk', 'Union Bank of India Clerk',
        'Punjab National Bank Clerk', 'Bank of Maharashtra PO', 'Punjab And Sind Bank PO',
        'OSCB Assistant Manager', 'South Indian Bank', 'Bank Of Baroda (BOB)',
        'Saraswat Bank Junior Officer', 'Syndicate Bank', 'Uttarakhand Cooperative Bank',
        'Bihar State Cooperative Bank', 'Nagapattinam District Central Cooperative Bank', 'RBI Grade C Officer',
        'MSC Bank Clerk', 'Thanjavur District Central Cooperative Bank', 'Telangana State Cooperative Apex Bank',
        'Rajasthan Cooperative Bank', 'Canara Bank', 'Federal Bank',
        'Dena Bank', 'IDBI Bank Assistant Manager', 'Jammu And Kashmir Bank PO',
        'RBI Security Guard', 'DCCB Srikakulam Staff Assistant/Clerk', 'Karur Vysya Bank',
        'Karnataka Bank', 'Vijaya Bank', 'Indian Bank PO',
        'NHB Assistant Manager', 'Axis Bank CSO', 'ICICI Bank',
        'HDFC Bank', 'ING Vysya Bank', 'Kotak Mahindra Bank',
        'RBI Office Attendant', 'HARCO - Senior Accountant', 'Haryana State Co-Operative Bank - Clerk',
        'Haryana State Co-Operative Bank - Assistant'
      ]
    },
    { 
      id: 'b2', 
      title: 'Bank Specialist Officer (SO)', 
      isGrid: true,
      listItems: [
        'SBI Circle Based Officer (CBO)', 'Bank of Maharashtra Generalist Officer Scale II', 'Bank of Maharashtra Generalist Officer Scale III',
        'Central Bank of India Manager Scale II', 'IBPS Agriculture field Officer (AFO)', 'IBPS SO Prelims',
        'IBPS RRB SO (IT Officer)', 'IBPS SO IT Officer', 'IBPS SO HR Officer',
        'IBPS SO Law Officer', 'IBPS SO Marketing Officer', 'IBPS SO Agriculture Officer',
        'IBPS SO Rajbhasha Adhikari', 'IBPS RRB SO (General Banking Officer)', 'IBPS RRB SO (Marketing Officer)',
        'IBPS RRB SO (Agriculture Officer)', 'IBPS RRB SO (Senior Manager)', 'IBPS RRB Treasury Manager',
        'Central Bank of India SO IT (CBI)', 'SBI Specialist Cadre Officer', 'Bank of India Credit Officer',
        'RBI Assistant Manager (Rajbhasha)', 'UBI Credit Officer', 'Rajasthan Cooperative Bank Manager / Senior Manager',
        'Bank of Baroda SO (Banking and Finance)', 'Bank of Baroda SO (Marketing Officer)', 'Bank of Baroda SO (IT Officer)',
        'Union Bank of India SO', 'PNB Specialist Officer (SO)', 'Rajasthan Cooperative Bank (Computer Programmer)'
      ]
    }
  ];

  const railwayExams = [
    {
      id: 'r1',
      title: 'Railway Recruitment Board (RRB)',
      isGrid: true,
      listItems: [
        'RRB Assistant Station Master (ASM)', 'Railway TTE', 'RRB NTPC (Malayalam)',
        'RRB NTPC (Tamil)', 'RRB Technician', 'Railway TC',
        'RRB (NTPC)', 'RRB/RRC Group D', 'RRB / RRC Group D (Telugu)',
        'RRB ALP', 'RRB ALP Psychometric Test', 'RRB NTPC (Kannada)',
        'RRB NTPC (Odia)', 'RRB NTPC (Bengali)', 'RRB NTPC (Telugu)',
        'RRB NTPC (Marathi)', 'RRB NTPC (Gujarati)', 'Additional General Manager (AGM Grade-I)'
      ]
    },
    {
      id: 'r2',
      title: 'Railway Apprentice',
      isGrid: true,
      listItems: [
        'Special Class Railway Apprentice (SCRA)', 'Railway Apprentice Exam'
      ]
    },
    {
      id: 'r3',
      title: 'Railway Police (RPF)',
      isGrid: true,
      listItems: [
        'RPF Constable Ancillary', 'RPF SI (Sub Inspector)', 'RPF Constable'
      ]
    },
    {
      id: 'r4',
      title: 'RRB Stenographer',
      isGrid: true,
      listItems: [
        'RRB Junior Stenographer', 'RRB Junior Translator', 'East Central Railway Junior Clerk (ECR)'
      ]
    }
  ];

  const defenceExams = [
    {
      id: 'd1',
      title: 'HP Police',
      isGrid: true,
      listItems: [
        'HP Police Constable'
      ]
    },
    {
      id: 'd2',
      title: 'Jharkhand Police',
      isGrid: true,
      listItems: [
        'Jharkhand Police Constable'
      ]
    },
    {
      id: 'd3',
      title: 'Puducherry Police',
      isGrid: true,
      listItems: [
        'Puducherry Home guard'
      ]
    },
    {
      id: 'd4',
      title: 'UP Police (UPP)',
      isGrid: true,
      listItems: [
        'UP Police Constable', 'UP Police Assistant Operator', 'UP Police Head Operator',
        'UP Police SI Confidential', 'UP Police Sub Inspector', 'UP Police Workshop Staff',
        'UP Police ASI', 'UP Police Computer Operator', 'UP Police Jail Warder',
        'Uttar Pradesh Police Fireman'
      ]
    },
    {
      id: 'd5',
      title: 'Delhi Police',
      isGrid: true,
      listItems: [
        'Delhi Home Guard', 'Delhi Police Constable', 'Delhi Police Head Constable',
        'Delhi Police Multi Tasking Staff'
      ]
    },
    {
      id: 'd6',
      title: 'Bihar Police',
      isGrid: true,
      listItems: [
        'Bihar Police Constable (CSBC)', 'Bihar Police SI', 'Bihar Police Fireman',
        'Bihar Police Forest Guard', 'Bihar Police Steno Assistant Sub Inspector', 'Bihar Police Driver Constable',
        'Bihar Police Enforcement Sub Inspector'
      ]
    },
    {
      id: 'd7',
      title: 'Madhya Pradesh Police',
      isGrid: true,
      listItems: [
        'MP Police (Constable)', 'MP Sub Inspector (MPSI)'
      ]
    },
    {
      id: 'd8',
      title: 'UPSC NDA',
      isGrid: true,
      listItems: [
        'UPSC NDA'
      ]
    },
    {
      id: 'd9',
      title: 'UPSC CDS',
      isGrid: true,
      listItems: [
        'Indian Military Academy (IMA)', 'Officers Training Academy (OTA)'
      ]
    },
    {
      id: 'd10',
      title: 'Territorial Army',
      isGrid: true,
      listItems: [
        'Territorial Army Officer'
      ]
    },
    {
      id: 'd11',
      title: 'Indian Navy',
      isGrid: true,
      listItems: [
        'Artificer Apprentice (AA) & Senior Secondary Recruit (SSR)', 'Indian Navy Tradesman', 'Indian Navy Chargeman',
        'INET - Indian Navy Entrance Test (Officer Entry)', 'Indian Navy Agniveer MR', 'Indian Navy Agniveer SSR',
        'Indian Navy Naval Dockyard'
      ]
    },
    {
      id: 'd12',
      title: 'Intelligence Bureau',
      isGrid: true,
      listItems: [
        'IB ACIO Grade - II', 'Intelligence Bureau Security Assistant'
      ]
    },
    {
      id: 'd13',
      title: 'Ind. Maritime - IMU CET (UG)',
      isGrid: true,
      listItems: [
        'Ind. Maritime - IMU CET (UG)'
      ]
    },
    {
      id: 'd14',
      title: 'Ladakh Police',
      isGrid: true,
      listItems: [
        'Ladakh Police Constable Executive'
      ]
    },
    {
      id: 'd15',
      title: 'Assam Police',
      isGrid: true,
      listItems: [
        'Assam Police Constable', 'Assam Police Sub Inspector'
      ]
    },
    {
      id: 'd16',
      title: 'Punjab Police',
      isGrid: true,
      listItems: [
        'Punjab Sub Inspector (SI)', 'Punjab Police Constable'
      ]
    },
    {
      id: 'd17',
      title: 'Haryana Police',
      isGrid: true,
      listItems: [
        'Haryana Police Constable', 'Haryana Sub Inspector (SI)', 'Haryana Police Constable Commando Wing'
      ]
    },
    {
      id: 'd18',
      title: 'Rajasthan Police',
      isGrid: true,
      listItems: [
        'Rajasthan Police Constable', 'Rajasthan Police Sub Inspector', 'Rajasthan Home Guard'
      ]
    },
    {
      id: 'd19',
      title: 'Odisha Police',
      isGrid: true,
      listItems: [
        'Odisha Police Constable'
      ]
    },
    {
      id: 'd20',
      title: 'Kerala Police',
      isGrid: true,
      listItems: [
        'Kerala PSC Sub Inspector'
      ]
    },
    {
      id: 'd21',
      title: 'Maharashtra Police',
      isGrid: true,
      listItems: [
        'Maharashtra Police Constable'
      ]
    },
    {
      id: 'd22',
      title: 'Chhattisgarh Police',
      isGrid: true,
      listItems: [
        'Chhattisgarh Police Sub Inspector (SI)', 'Chhattisgarh Police Constable'
      ]
    },
    {
      id: 'd23',
      title: 'Sashastra Seema Bal (SSB)',
      isGrid: true,
      listItems: [
        'SSB - Sub Inspector (SI)'
      ]
    },
    {
      id: 'd24',
      title: 'A P Police',
      isGrid: true,
      listItems: [
        'AP Police Sub Inspector (SI)', 'AP Police Constable'
      ]
    },
    {
      id: 'd25',
      title: 'Goa Police',
      isGrid: true,
      listItems: [
        'Goa Police Constable', 'Goa Police SI'
      ]
    },
    {
      id: 'd26',
      title: 'Meghalaya Police',
      isGrid: true,
      listItems: [
        'Meghalaya Police Sub Inspector'
      ]
    },
    {
      id: 'd27',
      title: 'Telangana Police',
      isGrid: true,
      listItems: [
        'Telangana Police Constable'
      ]
    },
    {
      id: 'd28',
      title: 'West Bengal Police',
      isGrid: true,
      listItems: [
        'West Bengal Constable', 'West Bengal Police Sub Inspector'
      ]
    },
    {
      id: 'd29',
      title: 'Indian Air Force (IAF)',
      isGrid: true,
      listItems: [
        'IAF Agniveervayu', 'Air Force Group C', 'AFCAT',
        'AFCAT EKT Computer Science', 'AFCAT EKT EE', 'AFCAT EKT ME',
        'Air Force X & Y Group'
      ]
    },
    {
      id: 'd30',
      title: 'Military Engineering Services (MES)',
      isGrid: true,
      listItems: [
        'MES Supervisor B/S'
      ]
    },
    {
      id: 'd31',
      title: 'Indian Army',
      isGrid: true,
      listItems: [
        'Border Roads Organisation (BRO)', 'Military Nursing Services (MNS)', 'BRO Driver Mechanical',
        'Indian Army Sepoy Pharma', 'Soldier GD', 'Havildar (Surveyor Automated Cartographer)'
      ]
    },
    {
      id: 'd32',
      title: 'Karnataka State Police (KSP)',
      isGrid: true,
      listItems: [
        'KSP Armed Police Constable (Men)', 'KSP Sub Inspector'
      ]
    },
    {
      id: 'd33',
      title: 'Jammu & Kashmir Police',
      isGrid: true,
      listItems: [
        'J & K Police Constable', 'Jammu and Kashmir Police Sub Inspector'
      ]
    },
    {
      id: 'd34',
      title: 'Central Armed Police Forces CAPF (AC)',
      isGrid: true,
      listItems: [
        'UPSC Central Armed Police Forces AC'
      ]
    },
    {
      id: 'd35',
      title: 'Assam Rifles',
      isGrid: true,
      listItems: [
        'Assam Rifles Tradesman (Clerk)', 'Assam Rifles Technical & Tradesman'
      ]
    },
    {
      id: 'd36',
      title: 'Central Industrial Security Force (CISF)',
      isGrid: true,
      listItems: [
        'CISF ASI', 'CISF Constable', 'CISF Head Constable',
        'CISF Assistant Commandant Executive LDC'
      ]
    },
    {
      id: 'd37',
      title: 'Coast Guard',
      isGrid: true,
      listItems: [
        'Coast Guard (Navik) GD', 'Coast Guard (Navik) DB', 'Coast Guard (Yantrik)'
      ]
    },
    {
      id: 'd38',
      title: 'Border Security Force',
      isGrid: true,
      listItems: [
        'BSF Radio Operator', 'BSF Constable Tradesman', 'SSB Head Constable',
        'SSB Constable', 'BSF-ASI / HC'
      ]
    },
    {
      id: 'd39',
      title: 'Central Reserve Police Force (CRPF)',
      isGrid: true,
      listItems: [
        'CRPF GD Constable', 'ITBP Constable Tradesman', 'CRPF Head Constable Ministerial',
        'CRPF Constable (Technical and Tradesman)'
      ]
    },
    {
      id: 'd40',
      title: 'Tamil Nadu Uniformed Services Recruitment Board (TNUSRB)',
      isGrid: true,
      listItems: [
        'TNUSRB Sub Inspector', 'TNUSRB Police Constable Grade II', 'TNUSRB Jail Warder Grade II'
      ]
    }
  ];

  const governmentExams = [
    {
      id: 'g1',
      title: 'Teaching Exam',
      isGrid: true,
      listItems: [
        'CTET', 'UPTET', 'KVS', 'NVS', 'DSSSB', 'Super TET'
      ]
    },
    {
      id: 'g2',
      title: 'SSC Exams',
      isGrid: true,
      listItems: sscExams.map(e => e.title)
    },
    {
      id: 'g3',
      title: 'State Police Exam',
      isGrid: true,
      listItems: defenceExams.reduce((acc, curr) => acc.concat(curr.listItems), [])
    },
    {
      id: 'g4',
      title: 'Banking Exam',
      isGrid: true,
      listItems: bankExams.reduce((acc, curr) => curr.listItems ? acc.concat(curr.listItems) : acc, [])
    },
    {
      id: 'g5',
      title: 'Railway Exam',
      isGrid: true,
      listItems: railwayExams.reduce((acc, curr) => acc.concat(curr.listItems), [])
    },
    {
      id: 'g6',
      title: 'Civil Services & State Exams',
      isGrid: true,
      listItems: [
        'UPSC Civil Services', 'UPPSC', 'BPSC', 'MPPSC', 'RPSC'
      ]
    }
  ];

  const toggleExam = (id) => {
    if (expandedExam === id) {
      setExpandedExam(null);
    } else {
      setExpandedExam(id);
    }
  };

  return (
    <div className="bg-gray-50 pt-20 pb-16">

      {/* Hero Section */}
      <div className="bg-brand-blue text-white py-16 px-4 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-orange opacity-10 mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h4
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-orange font-bold uppercase tracking-widest mb-2"
          >
            Our Pillars of Strength
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
          >
            Meet The <span className="text-white border-b-4 border-brand-orange">Librs Classes</span> Experts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            Learn from the brightest minds. Our distinguished faculty members bring years of proven expertise in preparing students for SSC, Banking, Teaching, and State Police exams.
          </motion.p>
        </div>
      </div>

      {/* Popular Exams Section */}
      <PopularExams />

      {/* Explore your Exam Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-10 relative">
            <h4 className="text-brand-orange font-bold uppercase tracking-wider mb-3 flex items-center justify-center gap-3">
              <span className="w-10 h-[2px] bg-brand-orange/50"></span>
              Categories
              <span className="w-10 h-[2px] bg-brand-orange/50"></span>
            </h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">Explore your Exam</h2>
          </div>

          <div className="flex justify-center relative w-full">
            {/* Scrollable Container */}
            <div className="w-full md:w-auto overflow-x-auto flex space-x-4 py-4 px-2 scrollbar-hide snap-x justify-start md:justify-center" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {examCategories.map((category, index) => {
                const isActive = activeCategory === category.name;
                return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center gap-2.5 px-6 py-4 rounded-xl whitespace-nowrap text-[15px] font-bold transition-all duration-300 snap-center shadow-sm ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-orange to-yellow-500 text-white border-transparent shadow-[0_8px_20px_rgb(249,115,22,0.25)] transform scale-105'
                      : 'bg-white text-gray-600 border border-slate-200 hover:border-brand-orange/30 hover:bg-orange-50/50 hover:text-brand-orange hover:-translate-y-1'
                  }`}
                >
                  <span className={`${isActive ? 'text-white' : 'text-brand-blue'} text-lg`}>
                    {category.icon}
                  </span>
                  {category.name}
                </button>
              )})}
            </div>
          </div>

          {/* Accordion for SSC */}
          {activeCategory === 'SSC' && (
            <div className="mt-12 max-w-4xl mx-auto bg-slate-50 p-6 md:p-8 rounded-xl shadow-inner border border-slate-200/60">
              <div className="space-y-4">
                {sscExams.map((exam) => (
                  <div key={exam.id} className="bg-white border border-gray-200 rounded-md overflow-hidden hover:border-gray-300 transition-colors shadow-sm">
                    <button
                      onClick={() => toggleExam(exam.id)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-[15px] font-medium text-gray-800">{exam.title}</span>
                      <span className="text-gray-400">
                        {expandedExam === exam.id ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                      </span>
                    </button>
                    {expandedExam === exam.id && (
                      <div className="px-6 pb-5 pt-1 text-gray-600 text-[15px] border-t border-gray-50">
                        {exam.isList ? (
                          <ul className="list-disc pl-5 space-y-1">
                            <li>{exam.details}</li>
                          </ul>
                        ) : (
                          <p>{exam.details}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Accordion for Banking */}
          {activeCategory === 'Banking' && (
            <div className="mt-12 max-w-4xl mx-auto bg-slate-50 p-6 md:p-8 rounded-xl shadow-inner border border-slate-200/60">
              <div className="space-y-4">
                {bankExams.map((exam) => (
                  <div key={exam.id} className="bg-white border border-gray-200 rounded-md overflow-hidden hover:border-gray-300 transition-colors shadow-sm">
                    <button
                      onClick={() => toggleExam(exam.id)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-[15px] font-medium text-gray-800">{exam.title}</span>
                      <span className="text-gray-400">
                        {expandedExam === exam.id ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                      </span>
                    </button>
                    {expandedExam === exam.id && (
                      <div className="px-6 pb-5 pt-3 text-gray-600 text-[14px] border-t border-gray-50">
                        {exam.isGrid ? (
                          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 list-disc pl-4">
                            {exam.listItems.map((item, i) => (
                              <li key={i} className="hover:text-brand-orange transition-colors cursor-default">{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{exam.details}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Accordion for Railway */}
          {activeCategory === 'Railway' && (
            <div className="mt-12 max-w-4xl mx-auto bg-slate-50 p-6 md:p-8 rounded-xl shadow-inner border border-slate-200/60">
              <div className="space-y-4">
                {railwayExams.map((exam) => (
                  <div key={exam.id} className="bg-white border border-gray-200 rounded-md overflow-hidden hover:border-gray-300 transition-colors shadow-sm">
                    <button
                      onClick={() => toggleExam(exam.id)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-[15px] font-medium text-gray-800">{exam.title}</span>
                      <span className="text-gray-400">
                        {expandedExam === exam.id ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                      </span>
                    </button>
                    {expandedExam === exam.id && (
                      <div className="px-6 pb-5 pt-3 text-gray-600 text-[14px] border-t border-gray-50">
                        {exam.isGrid ? (
                          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 list-disc pl-4">
                            {exam.listItems.map((item, i) => (
                              <li key={i} className="hover:text-brand-orange transition-colors cursor-default">{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{exam.details}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Accordion for Defence & Police */}
          {activeCategory === 'Defence & Police' && (
            <div className="mt-12 max-w-4xl mx-auto bg-slate-50 p-6 md:p-8 rounded-xl shadow-inner border border-slate-200/60">
              <div className="space-y-4">
                {defenceExams.map((exam) => (
                  <div key={exam.id} className="bg-white border border-gray-200 rounded-md overflow-hidden hover:border-gray-300 transition-colors shadow-sm">
                    <button
                      onClick={() => toggleExam(exam.id)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-[15px] font-medium text-gray-800">{exam.title}</span>
                      <span className="text-gray-400">
                        {expandedExam === exam.id ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                      </span>
                    </button>
                    {expandedExam === exam.id && (
                      <div className="px-6 pb-5 pt-3 text-gray-600 text-[14px] border-t border-gray-50">
                        {exam.isGrid ? (
                          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 list-disc pl-4">
                            {exam.listItems.map((item, i) => (
                              <li key={i} className="hover:text-brand-orange transition-colors cursor-default">{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{exam.details}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Accordion for Government Exams */}
          {activeCategory === 'Government Exams' && (
            <div className="mt-12 max-w-4xl mx-auto bg-slate-50 p-6 md:p-8 rounded-xl shadow-inner border border-slate-200/60">
              <div className="space-y-4">
                {governmentExams.map((exam) => (
                  <div key={exam.id} className="bg-white border border-gray-200 rounded-md overflow-hidden hover:border-gray-300 transition-colors shadow-sm">
                    <button
                      onClick={() => toggleExam(exam.id)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-[15px] font-medium text-gray-800">{exam.title}</span>
                      <span className="text-gray-400">
                        {expandedExam === exam.id ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                      </span>
                    </button>
                    {expandedExam === exam.id && (
                      <div className="px-6 pb-5 pt-3 text-gray-600 text-[14px] border-t border-gray-50">
                        {exam.isGrid ? (
                          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 list-disc pl-4">
                            {exam.listItems.map((item, i) => (
                              <li key={i} className="hover:text-brand-orange transition-colors cursor-default">{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{exam.details}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Faculty;
