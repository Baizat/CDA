{
    pages: [
     {
      name: "Step1",
      elements: [
       {
        type: "panel",
        name: "panel1",
        elements: [
         {
          type: "radiogroup",
          name: "question1",
          title: {
           default: "Do you create a monthly budget?",
           ar: "ھل تقوم بعمل میزانیة شھریة؟"
          },
          isRequired: true,
          choices: [
           {
            value: "item1",
            text: {
             default: "Yes, Regularly",
             ar: "نعم ، بانتظام"
            }
           },
           {
            value: "item2",
            text: {
             default: "Sometimes",
             ar: "بعض الأحیان"
            }
           },
           {
            value: "item3",
            text: {
             default: "Never",
             ar: "لا، نهائيا"
            }
           }
          ]
         },
         {
          type: "radiogroup",
          name: "question2",
          title: {
           default: "Do you make shopping lists?",
           ar: "ھل تقوم بعمل قوائم التسوق؟"
          },
          isRequired: true,
          choices: [
           {
            value: "item1",
            text: {
             default: "Yes, Regularly",
             ar: "نعم ، بانتظام"
            }
           },
           {
            value: "item2",
            text: {
             default: "Sometimes",
             ar: "بعض الأحیان"
            }
           },
           {
            value: "item3",
            text: {
             default: "Never",
             ar: "لا، نهائيا"
            }
           }
          ]
         },
         {
          type: "radiogroup",
          name: "question3",
          title: {
           default: "Do you involve your family in budgeting and managing expenses?",
           ar: "ھل تقوم بإشراك عائلتك في الموازنة وإدارة\nالنفقات؟"
          },
          isRequired: true,
          choices: [
           {
            value: "item1",
            text: {
             default: "Yes, Regularly",
             ar: "نعم ، بانتظام"
            }
           },
           {
            value: "item2",
            text: {
             default: "Sometimes",
             ar: "بعض الأحیان"
            }
           },
           {
            value: "item3",
            text: {
             default: "No, but I could",
             ar: "لا، لكن يمكنني أن أقوم بذلك"
            }
           },
           {
            value: "item4",
            text: {
             default: "I have no one to involve",
             ar: "لیس لدي أحد لإشراكھ"
            }
           }
          ]
         },
         {
          type: "radiogroup",
          name: "question9",
          title: {
           default: "Do you give your children an allowance?",
           ar: "هل تعطي أطفالك مصروف؟"
          },
          isRequired: true,
          choices: [
           {
            value: "item1",
            text: {
             default: "Yes, Always",
             ar: "نعم، بانتظام"
            }
           },
           {
            value: "item2",
            text: {
             default: "Sometimes",
             ar: "بعض الأحیان"
            }
           },
           {
            value: "item3",
            text: {
             default: "No, but I could",
             ar: "لا، لكن يمكنني ذلك"
            }
           },
           {
            value: "item4",
            text: {
             default: "I have no children dependant on me",
             ar: "لیس لدي أطفال یعتمدون عليّ"
            }
           }
          ]
         }
        ],
        title: "Budgeting"
       },
       {
        type: "panel",
        name: "panel2",
        title: "Savings and Investment"
       }
      ],
      title: {
       default: "Step1",
       ar: "المیزانیة"
      }
     },
     {
      name: "SavingsNInvestment",
      elements: [
       {
        type: "radiogroup",
        name: "question4",
        title: {
         default: "Do you have a financial plan and financial goals in place?",
         ar: "ھل لدیك خطة مالیة وأھداف مالیة مطبقة؟"
        },
        choices: [
         {
          value: "item1",
          text: {
           default: "Yes, I have set timelines and I am saving towards them",
           ar: "نعم، لقد وضعت خطة زمنية وأدخر من أجلها"
          }
         },
         {
          value: "item2",
          text: {
           default: "I have goals but no plan for them",
           ar: "لدي أھداف لكن لا خطة لھم"
          }
         },
         {
          value: "item3",
          text: {
           default: "I have ideas, but nothing defined",
           ar: "لدي أفكار ، لكن لا شيء محدد"
          }
         },
         {
          value: "item4",
          text: {
           default: "No",
           ar: "لا"
          }
         }
        ]
       },
       {
        type: "radiogroup",
        name: "question11",
        title: {
         default: "Do you have a financial plan and financial goals in place?",
         ar: "ھل لدیك خطة مالیة وأھداف مالیة مطبقة؟"
        },
        choices: [
         {
          value: "item1",
          text: {
           default: "Yes, I have set timelines and I am saving towards them",
           ar: "نعم ، لقد وضعت الخطة الزمنیة وأدخر من أجلھا"
          }
         },
         {
          value: "item2",
          text: {
           default: "I have goals but no plan for them",
           ar: "لدي أھداف لكن لا خطة لھم"
          }
         },
         {
          value: "item3",
          text: {
           default: "I have ideas, but nothing defined",
           ar: "لدي أفكار ، لكن لا شيء محدد"
          }
         },
         {
          value: "item4",
          text: {
           default: "No",
           ar: "لا"
          }
         }
        ]
       },
       {
        type: "radiogroup",
        name: "question10",
        title: {
         default: "Do you have a financial plan and financial goals in place?",
         ar: "ھل لدیك خطة مالیة وأھداف مالیة مطبقة؟"
        },
        choices: [
         {
          value: "item1",
          text: {
           default: "Yes, I have set timelines and I am saving towards them",
           ar: "نعم ، لقد وضعت الخطة الزمنیة وأدخر من أجلھا"
          }
         },
         {
          value: "item2",
          text: {
           default: "I have goals but no plan for them",
           ar: "لدي أھداف لكن لا خطة لھم"
          }
         },
         {
          value: "item3",
          text: {
           default: "I have ideas, but nothing defined",
           ar: "لدي أفكار ، لكن لا شيء محدد"
          }
         },
         {
          value: "item4",
          text: {
           default: "No",
           ar: "لا"
          }
         }
        ]
       },
       {
        type: "radiogroup",
        name: "question5",
        title: {
         default: "Do you save every month?",
         ar: "ھل تدخر كل شھر؟"
        },
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: {
           default: "Yes, a set amount monthly -more than 30% of income",
           ar: "نعم ، مبلغ محدد شھریاً - أكثر من 30 ٪ من الدخل"
          }
         },
         {
          value: "item2",
          text: {
           default: "Yes, a set amount monthly –between 15-30% of income",
           ar: "30 ٪ من الدخل - نعم ، مبلغ محدد شھریاً - بین 15"
          }
         },
         {
          value: "item3",
          text: {
           default: "Yes, a set amount monthly –less than 15% of income",
           ar: "نعم ، مبلغ محدد شھریاً - أقل من 15 ٪ من الدخل"
          }
         },
         {
          value: "item4",
          text: {
           default: "Yes, different amounts every month",
           ar: "نعم ، مبالغ مختلفة كل شھر"
          }
         },
         {
          value: "item5",
          text: {
           default: "When I can",
           ar: "عندما استطیع"
          }
         },
         {
          value: "item6",
          text: {
           default: "Never",
           ar: "لا"
          }
         }
        ]
       },
       {
        type: "radiogroup",
        name: "question6",
        title: {
         default: "Do you have a saving account for your children?",
         ar: "ھل لدیك حساب توفیر لأطفالك؟"
        },
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: {
           default: "Yes, I contribute to it every month",
           ar: "نعم ، أساھم فیھ كل شھر"
          }
         },
         {
          value: "item2",
          text: {
           default: "Yes, I add what I can every month",
           ar: "نعم، أضيف ما أستطيع كل شهر"
          }
         },
         {
          value: "item3",
          text: {
           default: "No",
           ar: "لا"
          }
         },
         {
          value: "item4",
          text: {
           default: "I have no dependent children",
           ar: "لیس لدي أطفال معالین"
          }
         }
        ]
       },
       {
        type: "radiogroup",
        name: "question7",
        title: {
         default: "Do you have an emergency fund (for example to cover 3-6 months expenses)?",
         ar: "ھل لدیك صندوق للطوارئ (على سبیل المثال لتغطیة مصاریف\n6-3 أشھر)؟"
        },
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: {
           default: "Yes",
           ar: "نعم"
          }
         },
         {
          value: "item2",
          text: {
           default: "No, but I am working towards one",
           ar: "لا، لكني أعمل على إنشاء واحد"
          }
         },
         {
          value: "item3",
          text: {
           default: "No",
           ar: "لا"
          }
         }
        ]
       },
       {
        type: "checkbox",
        name: "question8",
        title: {
         default: "Please select which of the below areas you are investing in (leave blank if none)",
         ar: "لایرجى تحدید أي من المناطق أدناه التي تستثمر فیھا (اتركھ فارغا\nإذا لم یكن موجودا)"
        },
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: {
           default: "Deposits or Bonds",
           ar: "الودائع أو السندات"
          }
         },
         {
          value: "item2",
          text: {
           default: "Annuities (including Pensions)",
           ar: "المعاشات (بما في ذلك الراتب التقاعدي)"
          }
         },
         {
          value: "item3",
          text: {
           default: "Real Estate (property)",
           ar: "العقارات)"
          }
         },
         {
          value: "item4",
          text: {
           default: "Stocks",
           ar: "مخزونات"
          }
         },
         {
          value: "item5",
          text: {
           default: "Saving Accounts",
           ar: "مخزونات"
          }
         },
         {
          value: "item6",
          text: {
           default: "Commodities (including Gold)",
           ar: "السلع (بما في ذلك الذھب)"
          }
         },
         {
          value: "item7",
          text: {
           default: "Investment Funds",
           ar: "صنادیق الاستثمار"
          }
         },
         {
          value: "item8",
          text: {
           default: "Currencies (FOREX)",
           ar: "العملات (الفوركس)"
          }
         },
         {
          value: "item9",
          text: {
           default: "Investing in small business",
           ar: "الاستثمار في الأعمال التجاریة الصغیرة"
          }
         },
         {
          value: "item10",
          text: {
           default: "Other",
           ar: "آخر"
          }
         }
        ]
       }
      ],
      title: {
       default: "Savings and Investment",
       ar: "الادخار والاستثمار"
      }
     }
    ],
    maxTimeToFinish: 8,
    maxTimeToFinishPage: 4,
    showTimerPanel: "top",
    showTimerPanelMode: "page"
   }