import React, { useState, useEffect } from 'react';
import { Wallet, CreditCard, ArrowRight, CheckCircle, Clock, Settings, User, Plus, Smartphone, TrendingUp, Zap, Shield, X, ChevronRight, Menu, Bell, MapPin, Calendar } from 'lucide-react';

export default function RideApp() {
  const [screen, setScreen] = useState('welcome');
  const [balance, setBalance] = useState(50.00);
  const [paymentMethod, setPaymentMethod] = useState('momo');
  const [isPaying, setIsPaying] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [rippleEffect, setRippleEffect] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [trips, setTrips] = useState([
    { id: 1, route: 'Accra → Tema', amount: 8.50, date: '2 hours ago', status: 'completed', driver: 'Kwame' },
    { id: 2, route: 'Circle → Madina', amount: 5.00, date: 'Yesterday', status: 'completed', driver: 'Ama' },
    { id: 3, route: 'Lapaz → Achimota', amount: 3.50, date: '2 days ago', status: 'completed', driver: 'Kofi' },
  ]);

  useEffect(() => {
    setFadeIn(true);
  }, [screen]);

  const handleTapToPay = () => {
    setRippleEffect(true);
    setIsPaying(true);
    setTimeout(() => {
      setRippleEffect(false);
      setIsPaying(false);
      setShowSuccess(true);
      const newBalance = balance - 5.50;
      setBalance(newBalance);
      setTrips([
        { id: trips.length + 1, route: 'Current Trip', amount: 5.50, date: 'Just now', status: 'completed', driver: 'Active' },
        ...trips
      ]);
      setTimeout(() => {
        setShowSuccess(false);
        setScreen('home');
      }, 2500);
    }, 2500);
  };

  const MTNLogo = () => (
    <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center font-bold text-yellow-900 text-xl">
      MTN
    </div>
  );

  const VodafoneLogo = () => (
    <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center font-bold text-white text-xl">
      V
    </div>
  );

  const BankLogo = () => (
    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
      <CreditCard className="w-6 h-6 text-white" />
    </div>
  );

  // Welcome Screen
  if (screen === 'welcome') {
    return (
      <div className="h-screen bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 flex flex-col relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
          * { font-family: 'Inter', sans-serif; }
          
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }

          @keyframes ripple {
            0% { transform: scale(0.8); opacity: 1; }
            100% { transform: scale(2.5); opacity: 0; }
          }

          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }

          .animate-slideUp { animation: slideUp 0.6s ease-out; }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .glass { background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); }
          .shimmer { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); background-size: 1000px 100%; animation: shimmer 2s infinite; }
        `}</style>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8">
          {/* App Icon with floating animation */}
          <div className="animate-float mb-8">
            <div className="relative">
              <div className="w-28 h-28 bg-white rounded-[32px] flex items-center justify-center shadow-2xl">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-[28px] flex items-center justify-center">
                  <Zap className="w-14 h-14 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <Zap className="w-4 h-4 text-yellow-900" />
              </div>
            </div>
          </div>

          <div className="animate-slideUp text-center mb-12">
            <h1 className="text-5xl font-black text-white mb-3 tracking-tight">RideApp</h1>
            <p className="text-xl text-white font-medium mb-2">Tap. Pay. Go.</p>
            <p className="text-emerald-100 text-base">The future of trotro payments</p>
          </div>

          {/* Feature cards with glass effect */}
          <div className="space-y-3 w-full max-w-sm animate-slideUp" style={{animationDelay: '0.2s'}}>
            <div className="glass p-5 rounded-2xl shadow-xl transform transition-all hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Zap className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-lg">Lightning Fast</p>
                  <p className="text-emerald-100 text-sm">Board and pay in seconds</p>
                </div>
              </div>
            </div>

            <div className="glass p-5 rounded-2xl shadow-xl transform transition-all hover:scale-105" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-lg">100% Secure</p>
                  <p className="text-emerald-100 text-sm">Bank-level encryption</p>
                </div>
              </div>
            </div>

            <div className="glass p-5 rounded-2xl shadow-xl transform transition-all hover:scale-105" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Wallet className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-lg">Multiple Options</p>
                  <p className="text-emerald-100 text-sm">MoMo, cards, or wallet</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative z-10 p-8 pb-10">
          <button
            onClick={() => setScreen('home')}
            className="w-full bg-white text-green-600 py-5 rounded-[20px] font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full text-white py-4 font-semibold mt-3 hover:text-emerald-100 transition-colors">
            Already have an account? <span className="font-bold">Log in</span>
          </button>
        </div>
      </div>
    );
  }

  // Home Screen
  if (screen === 'home') {
    return (
      <div className="h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        {/* Premium Header with Card Design */}
        <div className="relative pt-10 px-6 pb-6">
          {/* Top bar */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Welcome back</p>
                <p className="font-bold text-gray-900">Kwame</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <button onClick={() => setScreen('settings')} className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Balance Card - Premium Design */}
          <div className="relative mb-6 animate-slideUp">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-[28px] blur-xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-[28px] p-6 shadow-2xl overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-emerald-100 text-sm font-semibold mb-2">Total Balance</p>
                    <h1 className="text-5xl font-black text-white tracking-tight">₵{balance.toFixed(2)}</h1>
                  </div>
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Wallet className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => setScreen('addMoney')}
                    className="flex-1 bg-white bg-opacity-90 backdrop-blur-sm text-green-600 py-3.5 rounded-2xl font-bold shadow-lg hover:bg-opacity-100 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
                  >
                    <Plus className="w-5 h-5" strokeWidth={2.5} />
                    <span>Add Money</span>
                  </button>
                  <button
                    onClick={() => setScreen('tapToPay')}
                    className="flex-1 bg-emerald-700 bg-opacity-50 backdrop-blur-sm text-white py-3.5 rounded-2xl font-bold shadow-lg hover:bg-opacity-60 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
                  >
                    <Zap className="w-5 h-5" strokeWidth={2.5} />
                    <span>Pay Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-xl mb-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">24</p>
              <p className="text-xs text-gray-500 font-medium">Trips</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-center w-10 h-10 bg-green-50 rounded-xl mb-2">
                <Wallet className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">₵127</p>
              <p className="text-xs text-gray-500 font-medium">Spent</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-center w-10 h-10 bg-purple-50 rounded-xl mb-2">
                <Zap className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">₵5.3</p>
              <p className="text-xs text-gray-500 font-medium">Avg Trip</p>
            </div>
          </div>
        </div>

        {/* Recent Trips */}
        <div className="flex-1 px-6 overflow-auto pb-24">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Recent Trips</h2>
            <button onClick={() => setScreen('history')} className="text-green-600 font-bold text-sm flex items-center space-x-1 hover:text-green-700 transition-colors">
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {trips.slice(0, 5).map((trip, index) => (
              <div key={trip.id} className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow animate-slideUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{trip.route}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Calendar className="w-3 h-3 text-gray-400" />
                        <p className="text-xs text-gray-500 font-medium">{trip.date}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900 text-lg">₵{trip.amount.toFixed(2)}</p>
                    <div className="mt-1 px-2 py-0.5 bg-green-100 rounded-full">
                      <p className="text-xs text-green-700 font-semibold">Paid</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation - Floating */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white rounded-[24px] shadow-2xl px-6 py-4 flex justify-around backdrop-blur-xl border border-gray-100">
            <button className="flex flex-col items-center space-y-1.5 transform transition-all hover:scale-110">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Wallet className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xs font-bold text-green-600">Home</span>
            </button>
            <button onClick={() => setScreen('history')} className="flex flex-col items-center space-y-1.5 transform transition-all hover:scale-110">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-gray-400" strokeWidth={2.5} />
              </div>
              <span className="text-xs font-semibold text-gray-400">History</span>
            </button>
            <button onClick={() => setScreen('settings')} className="flex flex-col items-center space-y-1.5 transform transition-all hover:scale-110">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                <User className="w-6 h-6 text-gray-400" strokeWidth={2.5} />
              </div>
              <span className="text-xs font-semibold text-gray-400">Profile</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Add Money Screen
  if (screen === 'addMoney') {
    return (
      <div className="h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        {/* Header */}
        <div className="pt-12 pb-6 px-6">
          <button onClick={() => setScreen('home')} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-6">
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span className="font-semibold">Back</span>
          </button>
          <h1 className="text-3xl font-black text-gray-900 mb-2">Add Money</h1>
          <p className="text-gray-500 font-medium">Choose your payment method</p>
        </div>

        <div className="flex-1 px-6 overflow-auto pb-32">
          {/* Payment Methods */}
          <div className="space-y-4 mb-8">
            {/* MTN Mobile Money */}
            <button
              onClick={() => setPaymentMethod('momo')}
              className={`w-full p-5 rounded-[24px] border-2 transition-all transform hover:scale-[1.02] ${
                paymentMethod === 'momo' 
                  ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg shadow-green-100' 
                  : 'border-gray-200 bg-white shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[20px] flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-black text-yellow-900">MTN</span>
                    </div>
                    {paymentMethod === 'momo' && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-lg">MTN Mobile Money</p>
                    <p className="text-sm text-gray-500 font-medium">**** **** 5678</p>
                    <div className="mt-2 px-3 py-1 bg-yellow-100 rounded-full inline-block">
                      <p className="text-xs text-yellow-700 font-bold">Most Popular</p>
                    </div>
                  </div>
                </div>
                <ChevronRight className={`w-6 h-6 transition-colors ${paymentMethod === 'momo' ? 'text-green-600' : 'text-gray-400'}`} />
              </div>
            </button>

            {/* Vodafone Cash */}
            <button
              onClick={() => setPaymentMethod('vodafone')}
              className={`w-full p-5 rounded-[24px] border-2 transition-all transform hover:scale-[1.02] ${
                paymentMethod === 'vodafone' 
                  ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg shadow-green-100' 
                  : 'border-gray-200 bg-white shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-[20px] flex items-center justify-center shadow-lg">
                      <span className="text-3xl font-black text-white">V</span>
                    </div>
                    {paymentMethod === 'vodafone' && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-lg">Vodafone Cash</p>
                    <p className="text-sm text-gray-500 font-medium">**** **** 1234</p>
                  </div>
                </div>
                <ChevronRight className={`w-6 h-6 transition-colors ${paymentMethod === 'vodafone' ? 'text-green-600' : 'text-gray-400'}`} />
              </div>
            </button>

            {/* Bank Card */}
            <button
              onClick={() => setPaymentMethod('bank')}
              className={`w-full p-5 rounded-[24px] border-2 transition-all transform hover:scale-[1.02] ${
                paymentMethod === 'bank' 
                  ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg shadow-green-100' 
                  : 'border-gray-200 bg-white shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[20px] flex items-center justify-center shadow-lg">
                      <CreditCard className="w-8 h-8 text-white" />
                    </div>
                    {paymentMethod === 'bank' && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-lg">Bank Card</p>
                    <p className="text-sm text-gray-500 font-medium">Visa •••• 9876</p>
                  </div>
                </div>
                <ChevronRight className={`w-6 h-6 transition-colors ${paymentMethod === 'bank' ? 'text-green-600' : 'text-gray-400'}`} />
              </div>
            </button>

            {/* Add New Payment Method */}
            <button className="w-full p-5 rounded-[24px] border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition-all transform hover:scale-[1.02]">
              <div className="flex items-center justify-center space-x-3 text-gray-600">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Plus className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <span className="font-bold text-lg">Add Payment Method</span>
              </div>
            </button>
          </div>

          {/* Amount Input */}
          <div className="bg-white p-6 rounded-[24px] shadow-lg border border-gray-100">
            <label className="block text-sm font-bold text-gray-700 mb-3">Enter Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl font-black text-gray-400">₵</span>
              <input
                type="number"
                placeholder="0.00"
                defaultValue="50"
                className="w-full pl-12 pr-4 py-4 text-3xl font-black border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50"
              />
            </div>
            <div className="flex space-x-2 mt-4">
              {[20, 50, 100, 200].map((amount) => (
                <button key={amount} className="flex-1 py-2.5 bg-gray-100 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-xl font-bold text-sm transition-all">
                  ₵{amount}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent">
          <button
            onClick={() => {
              setBalance(balance + 50);
              setScreen('home');
            }}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-5 rounded-[20px] font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
          >
            <span>Add ₵50.00</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // Tap to Pay Screen
  if (screen === 'tapToPay') {
    return (
      <div className="h-screen bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <button
          onClick={() => setScreen('home')}
          className="absolute top-12 left-6 flex items-center space-x-2 text-white hover:text-emerald-100 transition-colors z-10"
        >
          <ArrowRight className="w-5 h-5 rotate-180" />
          <span className="font-bold">Back</span>
        </button>

        {!isPaying && !showSuccess && (
          <div className="relative z-10 text-center animate-slideUp">
            {/* Main Tap Circle */}
            <div className="relative mb-12">
              {/* Ripple effects */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-4 border-white border-opacity-20 rounded-full animate-ping"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center" style={{animationDelay: '0.5s'}}>
                <div className="w-80 h-80 border-4 border-white border-opacity-10 rounded-full animate-ping"></div>
              </div>
              
              {/* Center device */}
              <div className="relative w-56 h-56 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl animate-float">
                <div className="w-48 h-48 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                  <Smartphone className="w-24 h-24 text-white" strokeWidth={2} />
                </div>
                {/* Pulse indicator */}
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
              </div>

              {/* NFC waves indicator */}
              <div className="absolute -top-8 -right-8 w-20 h-20">
                <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                <div className="w-full h-full bg-yellow-400 rounded-full flex items-center justify-center">
                  <Zap className="w-10 h-10 text-yellow-900" strokeWidth={3} />
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-black text-white mb-4">Ready to Pay</h1>
            <p className="text-emerald-100 text-xl font-semibold mb-3">Hold phone near reader</p>
            
            {/* Amount display */}
            <div className="mb-10">
              <div className="inline-block bg-white bg-opacity-20 backdrop-blur-xl rounded-3xl px-8 py-4 shadow-2xl border border-white border-opacity-30">
                <p className="text-white text-5xl font-black tracking-tight">₵5.50</p>
              </div>
            </div>

            <button
              onClick={handleTapToPay}
              className="bg-white text-green-600 px-12 py-5 rounded-[24px] font-black text-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-[1.05] active:scale-[0.95] flex items-center space-x-3 mx-auto"
            >
              <span>Simulate Tap</span>
              <Zap className="w-6 h-6" strokeWidth={3} />
            </button>
            
            <div className="mt-8 glass px-6 py-3 rounded-2xl inline-block">
              <p className="text-emerald-100 text-sm font-semibold">Current Balance: <span className="text-white font-bold">₵{balance.toFixed(2)}</span></p>
            </div>
          </div>
        )}

        {isPaying && (
          <div className="relative z-10 text-center">
            {/* Processing animation */}
            <div className="relative mb-12">
              <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <div className="relative">
                  <div className="w-32 h-32 border-8 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="w-16 h-16 text-green-500 animate-pulse" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
              
              {/* Processing ripples */}
              {rippleEffect && (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 border-4 border-white rounded-full" style={{animation: 'ripple 1.5s ease-out'}}></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 border-4 border-white rounded-full" style={{animation: 'ripple 1.5s ease-out 0.3s'}}></div>
                  </div>
                </>
              )}
            </div>

            <h1 className="text-4xl font-black text-white mb-4 animate-pulse">Processing...</h1>
            <p className="text-emerald-100 text-xl font-semibold">Securely verifying payment</p>
            
            {/* Processing steps */}
            <div className="mt-8 space-y-3">
              <div className="glass px-6 py-3 rounded-2xl animate-slideUp">
                <p className="text-white font-semibold">✓ Reading device</p>
              </div>
              <div className="glass px-6 py-3 rounded-2xl animate-slideUp" style={{animationDelay: '0.5s'}}>
                <p className="text-white font-semibold">✓ Verifying account</p>
              </div>
              <div className="glass px-6 py-3 rounded-2xl animate-slideUp" style={{animationDelay: '1s'}}>
                <p className="text-white font-semibold">⏳ Processing payment</p>
              </div>
            </div>
          </div>
        )}

        {showSuccess && (
          <div className="relative z-10 text-center">
            {/* Success animation */}
            <div className="relative mb-12 animate-bounce">
              <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <CheckCircle className="w-40 h-40 text-green-500" strokeWidth={2.5} />
              </div>
              
              {/* Success burst effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 border-8 border-white rounded-full opacity-0" style={{animation: 'ripple 1s ease-out'}}></div>
              </div>
            </div>

            <h1 className="text-5xl font-black text-white mb-4">Success!</h1>
            <p className="text-emerald-100 text-xl font-semibold mb-3">Payment completed</p>
            
            <div className="space-y-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-xl rounded-3xl px-8 py-4 shadow-2xl border border-white border-opacity-30">
                <p className="text-emerald-100 text-sm font-semibold mb-1">Amount Paid</p>
                <p className="text-white text-4xl font-black">₵5.50</p>
              </div>
              
              <div className="glass px-6 py-3 rounded-2xl">
                <p className="text-emerald-100 text-sm font-semibold">New Balance: <span className="text-white font-bold text-lg">₵{balance.toFixed(2)}</span></p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Trip History Screen
  if (screen === 'history') {
    return (
      <div className="h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        <div className="pt-12 pb-6 px-6">
          <button onClick={() => setScreen('home')} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-6">
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span className="font-semibold">Back</span>
          </button>
          <h1 className="text-3xl font-black text-gray-900 mb-2">Trip History</h1>
          <p className="text-gray-500 font-medium">All your rides in one place</p>
        </div>

        <div className="flex-1 px-6 overflow-auto pb-6">
          {/* Stats Card */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-[28px] shadow-xl mb-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative">
              <p className="text-emerald-100 text-sm font-semibold mb-2">This Month</p>
              <p className="text-5xl font-black text-white mb-4">₵127.50</p>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <TrendingUp className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-bold">15% saved</span>
                </div>
                <p className="text-emerald-100 text-sm font-medium">vs last month</p>
              </div>
            </div>
          </div>

          {/* Monthly breakdown */}
          <div className="flex space-x-3 mb-6">
            <div className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-center w-10 h-10 bg-purple-50 rounded-xl mb-2">
                <Zap className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-sm text-gray-500 font-medium mb-1">Trips</p>
              <p className="text-2xl font-black text-gray-900">24</p>
            </div>
            <div className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-xl mb-2">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm text-gray-500 font-medium mb-1">Avg Fare</p>
              <p className="text-2xl font-black text-gray-900">₵5.30</p>
            </div>
          </div>

          <h2 className="font-black text-gray-900 mb-4 text-lg">All Transactions</h2>
          <div className="space-y-3">
            {trips.map((trip, index) => (
              <div key={trip.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all animate-slideUp" style={{animationDelay: `${index * 0.05}s`}}>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-base mb-1">{trip.route}</p>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 text-gray-400" />
                          <p className="text-xs text-gray-500 font-medium">{trip.date}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-3.5 h-3.5 text-gray-400" />
                          <p className="text-xs text-gray-500 font-medium">Driver: {trip.driver}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-3">
                    <p className="font-black text-gray-900 text-xl">₵{trip.amount.toFixed(2)}</p>
                    <div className="mt-1 px-2.5 py-1 bg-green-100 rounded-lg inline-block">
                      <p className="text-xs text-green-700 font-bold">Paid</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Settings/Profile Screen
  if (screen === 'settings') {
    return (
      <div className="h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        <div className="pt-12 pb-6 px-6">
          <button onClick={() => setScreen('home')} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-6">
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span className="font-semibold">Back</span>
          </button>
          <h1 className="text-3xl font-black text-gray-900 mb-2">Profile</h1>
          <p className="text-gray-500 font-medium">Manage your account</p>
        </div>

        <div className="flex-1 px-6 overflow-auto pb-6">
          {/* Profile Card */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-[28px] shadow-xl mb-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative">
              <div className="w-24 h-24 bg-white bg-opacity-20 backdrop-blur-sm rounded-[28px] flex items-center justify-center mx-auto mb-4 border-4 border-white border-opacity-30">
                <User className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-black text-white mb-1">Kwame Mensah</h2>
              <p className="text-emerald-100 font-semibold">+233 24 123 4567</p>
              <div className="mt-4 inline-block px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full border border-white border-opacity-30">
                <p className="text-white text-sm font-bold">Verified Member ✓</p>
              </div>
            </div>
          </div>

          {/* Settings Options */}
          <div className="space-y-3">
            <button className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">Payment Methods</p>
                  <p className="text-sm text-gray-500 font-medium">Manage linked accounts</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">Security & PIN</p>
                  <p className="text-sm text-gray-500 font-medium">Change your PIN</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center">
                  <Bell className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">Notifications</p>
                  <p className="text-sm text-gray-500 font-medium">Alert preferences</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">Help & Support</p>
                  <p className="text-sm text-gray-500 font-medium">Get help</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-gray-600" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">About RideApp</p>
                  <p className="text-sm text-gray-500 font-medium">Version 1.0.0</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <button className="w-full mt-6 bg-red-50 text-red-600 font-bold py-4 rounded-2xl border-2 border-red-100 hover:bg-red-100 transition-colors">
            Log Out
          </button>
        </div>
      </div>
    );
  }

  return null;
}
