import { useEffect, useState } from "react";

export const Actions = () => {

  useEffect(() => {
    fetch("http://localhost/khang/khang/project/php-react/tour_hot.php")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setTourHot(data.tourhot.reverse());
        setTourHotLength(true);
      } else {
        setTourHotLength(0);
      }
    })
    .catch((err) => {
      console.log(err);
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////
      fetch("http://localhost/khang/khang/project/php-react/signup.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setSignup(data.signup.reverse());
          setSignupLength(true);
        } else {
          setSignupLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    fetch("http://localhost/khang/khang/project/php-react/tour_offer.php")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setTourOffer(data.touroffer.reverse());
        setTourOfferLength(true);
      } else {
        setTourOfferLength(0);
      }
    })
    .catch((err) => {
      console.log(err);
    });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    fetch("http://localhost/khang/khang/project/php-react/tour_sport.php")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setTourSport(data.toursport.reverse());
        setTourSportLength(true);
      } else {
        setTourSportLength(0);
      }
    })
    .catch((err) => {
      console.log(err);
    });
///////////////////////////////////////////////////////////////////////////////////////////////////////////

    fetch("http://localhost/khang/khang/project/php-react/tour_capital.php")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setTourCapital(data.tourcapital.reverse());
        setTourCapitalLength(true);
      } else {
        setTourCapitalLength(0);
      }
    })
    .catch((err) => {
      console.log(err);
    });


/////////////////////////////////////////////////////////////////////////////////////////////////////////

  fetch("http://localhost/khang/khang/project/php-react/tour_cruise.php")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setTourCruise(data.tourcruise.reverse());
        setTourCruiseLength(true);
      } else {
        setTourCruiseLength(0);
      }
    })
    .catch((err) => {
      console.log(err);
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////
fetch("http://localhost/khang/khang/project/php-react/blog.php")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setBlog(data.blog.reverse());
        setBlogLength(true);
      } else {
        setBlogLength(0);
      }
    })
    .catch((err) => {
      console.log(err);
    });
///////////////////////////////////////////////////////////////////////////////////////////////////////
fetch("http://localhost/khang/khang/project/php-react/message.php")
.then((res) => {
  return res.json();
})
.then((data) => {
  if (data.success) {
    setMess(data.mess.reverse());
    setMessLength(true);
  } else {
    setMessLength(0);
  }
})
.catch((err) => {
  console.log(err);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////

fetch("http://localhost/khang/khang/project/php-react/mess_admin.php")
.then((res) => {
  return res.json();
})
.then((data) => {
  if (data.success) {
    setMessad(data.messadd.reverse());
    setMessadLength(true);
  } else {
    setMessadLength(0);
  }
})
.catch((err) => {
  console.log(err);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
fetch("http://localhost/khang/khang/project/php-react/account.php")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setAccount(data.account.reverse());
        setAccountLength(true);
      } else {
        setAccountLength(0);
      }
    })
    .catch((err) => {
      console.log(err);
    });
///////////////////////////////////////////////////////////////////////////////////////////////////////
fetch("http://localhost/khang/khang/project/php-react/cart.php")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setCart(data.cart.reverse());
        setCartLength(true);
      } else {
        setCartLength(0);
      }
    })
    .catch((err) => {
      console.log(err);
    });
///////////////////////////////////////////////////////////////////////////////////////////////////////
fetch("http://localhost/khang/khang/project/php-react/history.php")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setHistory(data.history.reverse());
        setHistoryLength(true);
      } else {
        setHistoryLength(0);
      }
    })
    .catch((err) => {
      console.log(err);
    });
//////////////////////////////////////////////////////////////////////////////////////////////////////
  fetch("http://localhost/khang/khang/project/php-react/active.php")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data.success) {
      setActive(data.active.reverse());
      setActiveLength(true);
    } else {
      setActiveLength(0);
    }
  })
  .catch((err) => {
    console.log(err);
  });
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  fetch("http://localhost/khang/khang/project/php-react/comment1.php")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data.success) {
      setCmt1(data.cmt.reverse());
      setCmt1Length(true);
    } else {
      setCmt1Length(0);
    }
  })
  .catch((err) => {
    console.log(err);
  });
/////////////////////////////////////////////////////////////////////////////////////////////////////
  }, []);
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

  //Tour Hot
          let [tourhot, setTourHot] = useState([]);
          let [tourhotLength, setTourHotLength] = useState(null);
          let [history, setHistory] = useState([]);
          let [historyLength, setHistoryLength] = useState(null);

          const addHot = (newHot) => {
            fetch("http://localhost/khang/khang/project/php-react/add_hot.php", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newHot),
            })
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                if (data.id) {
                  setTourHot([
                    {
                      id: data.id,
                      ...newHot,
                    },
                    ...tourhot,
                  ]);
                  setTourHotLength(true);
                } else {
                  alert(data.msg);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          };

          const editModeHot = (id) => {
            searchhot = searchhot.map((hot) => {
              if (hot.id_hot === id) {
                hot.isEditing = true;
                return hot;
              }
              hot.isEditing = false;
              return hot;
            });
            tourhot = tourhot.map((hot) => {
              if (hot.id_hot === id) {
                hot.isEditing = true;
                return hot;
              }
              hot.isEditing = false;
              return hot;
            });
            setTourHot(tourhot);
            setSearchhot(searchhot);
          };
        
          // Cance the edit mode.
          const cancelEditHot = (id) => {
            searchhot = searchhot.map((hot) => {
              if (hot.id_hot === id) {
                hot.isEditing = false;
                return hot;
              }
              return hot;
            });
            tourhot = tourhot.map((hot) => {
              if (hot.id_hot === id) {
                hot.isEditing = false;
                return hot;
              }
              return hot;
            });
            setTourHot(tourhot);
            setSearchhot(searchhot);
          };

          const updateHot = (hotData) => {
            console.log(hotData);
            fetch("http://localhost/khang/khang/project/php-react/update_hot.php", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(hotData),
            })
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                if (data.success) {
                  searchhot = searchhot.map((hot) => {
                    console.log(hot.id_hot); console.log(hotData.id_hot);
                    if (hot.id_hot === hotData.id_hot) {
                      console.log(hotData);
                      console.log(hot);
                      hot.isEditing = false;
                      hot.name_hot = hotData.name_hot;
                      hot.img_hot = hotData.img_hot;
                      hot.price_hot = hotData.price_hot;
                      hot.detail_hot = hotData.detail_hot;
                      hot.from_to_hot = hotData.from_to_hot;
                      return hot;
                    }
                    return hot;
                  });
                  setSearchhot(searchhot);

                  tourhot = tourhot.map((hot) => {
                    console.log(hot.id_hot); console.log(hotData.id_hot);
                    if (hot.id_hot === hotData.id_hot) {
                      console.log(hotData);
                      console.log(hot);
                      hot.isEditing = false;
                      hot.name_hot = hotData.name_hot;
                      hot.img_hot = hotData.img_hot;
                      hot.price_hot = hotData.price_hot;
                      hot.detail_hot = hotData.detail_hot;
                      hot.from_to_hot = hotData.from_to_hot;
                      return hot;
                    }
                    return hot;
                  });
                  setTourHot(tourhot);
                } else {
                  alert(data.msg);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          };

          const deleteHot = (theID) => {
            // filter outing the user.
          let hotDeleted = tourhot.filter((hot) => {
            return hot.id_hot !== theID;
          });
          let hotDeleteds = searchhot.filter((hot) => {
            return hot.id_hot !== theID;
          });
          fetch("http://localhost/khang/khang/project/php-react/delete_hot.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: theID }),
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              if (data.success) {
                setTourHot(hotDeleted);
                setSearchhot(hotDeleteds);
                if (tourhot.length === 1) {
                  setTourHotLength(0);
                  setSearchhotLength(0);
                }
              } else {
                alert(data.msg);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        };
         
  //End Tour Hot
  











  //Tour Sport
            let [toursport, setTourSport] = useState([]);
            let [toursportLength, setTourSportLength] = useState(null);

            const addSport = (newSport) => {
              fetch("http://localhost/khang/khang/project/php-react/add_sport.php", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newSport),
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  if (data.id) {
                    setTourSport([
                      {
                        id: data.id,
                        ...newSport,
                      },
                      ...toursport,
                    ]);
                    setTourSportLength(true);
                  } else {
                    alert(data.msg);
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            };


            const editModeSport = (id) => {
              searchsport = searchsport.map((sport) => {
                if (sport.id_sport === id) {
                  sport.isEditing = true;
                  return sport;
                }
                sport.isEditing = false;
                return sport;
              });
              setSearchsport(searchsport);
              toursport = toursport.map((sport) => {
                if (sport.id_sport === id) {
                  sport.isEditing = true;
                  return sport;
                }
                sport.isEditing = false;
                return sport;
              });
              setTourSport(toursport);
            };

            const cancelEditSport = (id) => {
              searchsport = searchsport.map((sport) => {
                if (sport.id_sport === id) {
                  sport.isEditing = false;
                  return sport;
                }
                return sport;
              });
              setSearchsport(searchsport);
              toursport = toursport.map((sport) => {
                if (sport.id_sport === id) {
                  sport.isEditing = false;
                  return sport;
                }
                return sport;
              });
              setTourSport(toursport);
            };

            const updateSport = (sportData) => {
              fetch("http://localhost/khang/khang/project/php-react/update_sport.php", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(sportData),
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  if (data.success) {
                    searchsport = searchsport.map((sport) => {
                      if (sport.id_sport === sportData.id_sport) {
                        sport.isEditing = false;
                        sport.name_sport = sportData.name_sport;
                        sport.img_sport = sportData.img_sport;
                        sport.price_sport = sportData.price_sport;
                        sport.detail_sport = sportData.detail_sport;
                        sport.from_to_sport = sportData.from_to_sport;
                        return sport;
                      }
                      return sport;
                    });
                    setSearchsport(searchsport);

                    toursport = toursport.map((sport) => {
                      if (sport.id_sport === sportData.id_sport) {
                        sport.isEditing = false;
                        sport.name_sport = sportData.name_sport;
                        sport.img_sport = sportData.img_sport;
                        sport.price_sport = sportData.price_sport;
                        sport.detail_sport = sportData.detail_sport;
                        sport.from_to_sport = sportData.from_to_sport;
                        return sport;
                      }
                      return sport;
                    });
                    setTourSport(toursport);
                  } else {
                    alert(data.msg);
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            };

            const deleteSport = (theID) => {
              // filter outing the user.
            let sportDeleted = toursport.filter((sport) => {
              return sport.id_sport !== theID;
            });
              let sportDeleteds = searchsport.filter((sport) => {
                return sport.id_sport !== theID;
            });
            fetch("http://localhost/khang/khang/project/php-react/delete_sport.php", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ id: theID }),
            })
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                if (data.success) {
                  setTourSport(sportDeleted);
                  setSearchsport(sportDeleteds);
                  if (toursport.length === 1) {
                    setTourSportLength(0);
                    setSearchsportLength(0);
                  }
                } else {
                  alert(data.msg);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          };

  //End Tour Sport










  //Tour Offer
            let [touroffer, setTourOffer] = useState([]);
            let [tourofferLength, setTourOfferLength] = useState(null);

            const addOffer = (newOffer) => {
              fetch("http://localhost/khang/khang/project/php-react/add_offer.php", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newOffer),
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  if (data.id) {
                    setTourOffer([
                      {
                        id: data.id,
                        ...newOffer,
                      },
                      ...touroffer,
                    ]);
                    setTourOfferLength(true);
                  } else {
                    alert(data.msg);
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            };


            const editModeOffer = (id) => {
              searchoffer = searchoffer.map((offer) => {
                if (offer.id_offer === id) {
                  offer.isEditing = true;
                  return offer;
                }
                offer.isEditing = false;
                return offer;
              });
              setSearchoffer(searchoffer);
              touroffer = touroffer.map((offer) => {
                if (offer.id_offer === id) {
                  offer.isEditing = true;
                  return offer;
                }
                offer.isEditing = false;
                return offer;
              });
              setTourOffer(touroffer);
            };

            const cancelEditOffer = (id) => {
              searchoffer = searchoffer.map((offer) => {
                if (offer.id_offer === id) {
                  offer.isEditing = false;
                  return offer;
                }
                return offer;
              });
              setSearchoffer(searchoffer);
              touroffer = touroffer.map((offer) => {
                if (offer.id_offer === id) {
                  offer.isEditing = false;
                  return offer;
                }
                return offer;
              });
              setTourOffer(touroffer);
            };

            const updateOffer = (offerData) => {
              fetch("http://localhost/khang/khang/project/php-react/update_offer.php", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(offerData),
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  if (data.success) {
                    searchoffer = searchoffer.map((offer) => {
                      if (offer.id_offer === offerData.id_offer) {
                        offer.isEditing = false;
                        offer.name_offer = offerData.name_offer;
                        offer.img_offer = offerData.img_offer;
                        offer.price_offer = offerData.price_offer;
                        offer.detail_offer = offerData.detail_offer;
                        offer.from_to_offer = offerData.from_to_offer;
                        return offer;
                      }
                      return offer;
                    });
                    setSearchoffer(searchoffer);

                    touroffer = touroffer.map((offer) => {
                      if (offer.id_offer === offerData.id_offer) {
                        offer.isEditing = false;
                        offer.name_offer = offerData.name_offer;
                        offer.img_offer = offerData.img_offer;
                        offer.price_offer = offerData.price_offer;
                        offer.detail_offer = offerData.detail_offer;
                        offer.from_to_offer = offerData.from_to_offer;
                        return offer;
                      }
                      return offer;
                    });
                    setTourOffer(touroffer);
                  } else {
                    alert(data.msg);
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            };

            const deleteOffer = (theID) => {
              // filter outing the user.
            let offerDeleted = touroffer.filter((offer) => {
              return offer.id_offer !== theID;
            });
            let offerDeleteds = searchoffer.filter((offer) => {
              return offer.id_offer !== theID;
            });
            fetch("http://localhost/khang/khang/project/php-react/delete_offer.php", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ id: theID }),
            })
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                if (data.success) {
                  setTourOffer(offerDeleted);
                  setSearchoffer(offerDeleteds);
                  if (touroffer.length === 1) {
                    setTourOfferLength(0);
                    setSearchofferLength(0);
                  }
                } else {
                  alert(data.msg);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          };
  //End Tour Offer
  












//Tour Capital
            let [tourcapital, setTourCapital] = useState([]);
            let [tourcapitalLength, setTourCapitalLength] = useState(null);

            const addCapital = (newCapital) => {
              fetch("http://localhost/khang/khang/project/php-react/add_capital.php", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newCapital),
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  if (data.id) {
                    setTourCapital([
                      {
                        id: data.id,
                        ...newCapital,
                      },
                      ...tourcapital,
                    ]);
                    setTourCapitalLength(true);
                  } else {
                    alert(data.msg);
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            };


            const editModeCapital = (id) => {
              searchcapital = searchcapital.map((capital) => {
                if (capital.id_capital === id) {
                  capital.isEditing = true;
                  return capital;
                }
                capital.isEditing = false;
                return capital;
              });
              setSearchcapital(searchcapital);
              tourcapital = tourcapital.map((capital) => {
                if (capital.id_capital === id) {
                  capital.isEditing = true;
                  return capital;
                }
                capital.isEditing = false;
                return capital;
              });
              setTourCapital(tourcapital);
            };

            const cancelEditCapital = (id) => {
              searchcapital = searchcapital.map((capital) => {
                if (capital.id_capital === id) {
                  capital.isEditing = false;
                  return capital;
                }
                return capital;
              });
              setSearchcapital(searchcapital);
              tourcapital = tourcapital.map((capital) => {
                if (capital.id_capital === id) {
                  capital.isEditing = false;
                  return capital;
                }
                return capital;
              });
              setTourCapital(tourcapital);
            };

            const updateCapital = (capitalData) => {
              fetch("http://localhost/khang/khang/project/php-react/update_capital.php", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(capitalData),
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  if (data.success) {
                    searchcapital = searchcapital.map((capital) => {
                      if (capital.id_capital === capitalData.id_capital) {
                        capital.isEditing = false;
                        capital.name_capital = capitalData.name_capital;
                        capital.img_capital = capitalData.img_capital;
                        capital.price_capital = capitalData.price_capital;
                        capital.detail_capital = capitalData.detail_capital;
                        capital.from_to_capital = capitalData.from_to_capital;
                        return capital;
                      }
                      return capital;
                    });
                    setSearchcapital(searchcapital);
                    tourcapital = tourcapital.map((capital) => {
                      if (capital.id_capital === capitalData.id_capital) {
                        capital.isEditing = false;
                        capital.name_capital = capitalData.name_capital;
                        capital.img_capital = capitalData.img_capital;
                        capital.price_capital = capitalData.price_capital;
                        capital.detail_capital = capitalData.detail_capital;
                        capital.from_to_capital = capitalData.from_to_capital;
                        return capital;
                      }
                      return capital;
                    });
                    setTourCapital(tourcapital);
                  } else {
                    alert(data.msg);
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            };

            const deleteCapital = (theID) => {
              // filter outing the user.
            let capitalDeleted = tourcapital.filter((capital) => {
              return capital.id_capital !== theID;
            });
            let capitalDeleteds = searchcapital.filter((capital) => {
              return capital.id_capital !== theID;
            });
            fetch("http://localhost/khang/khang/project/php-react/delete_capital.php", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ id: theID }),
            })
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                if (data.success) {
                  setTourCapital(capitalDeleted);
                  setSearchcapital(capitalDeleteds);
                  if (tourcapital.length === 1) {
                    setTourCapitalLength(0);
                    setSearchcapitalLength(0);
                  }
                } else {
                  alert(data.msg);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          };
//End Tour Capital










//Tour Cruise
let [tourcruise, setTourCruise] = useState([]);
let [tourcruiseLength, setTourCruiseLength] = useState(null);

const addCruise = (newCruise) => {
  fetch("http://localhost/khang/khang/project/php-react/add_cruise.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCruise),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.id) {
        setTourCruise([
          {
            id: data.id,
            ...newCruise,
          },
          ...tourcruise,
        ]);
        setTourCruiseLength(true);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};


const editModeCruise = (id) => {
  searchcruise = searchcruise.map((cruise) => {
    if (cruise.id_cruise === id) {
      cruise.isEditing = true;
      return cruise;
    }
    cruise.isEditing = false;
    return cruise;
  });
  setSearchcruise(searchcruise);
  tourcruise = tourcruise.map((cruise) => {
    if (cruise.id_cruise === id) {
      cruise.isEditing = true;
      return cruise;
    }
    cruise.isEditing = false;
    return cruise;
  });
  setTourCruise(tourcruise);
};

const cancelEditCruise = (id) => {
  searchcruise = searchcruise.map((cruise) => {
    if (cruise.id_cruise === id) {
      cruise.isEditing = false;
      return cruise;
    }
    return cruise;
  });
  setSearchcruise(searchcruise);
  tourcruise = tourcruise.map((cruise) => {
    if (cruise.id_cruise === id) {
      cruise.isEditing = false;
      return cruise;
    }
    return cruise;
  });
  setTourCruise(tourcruise);
};

const updateCruise = (cruiseData) => {
  fetch("http://localhost/khang/khang/project/php-react/update_cruise.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cruiseData),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        searchcruise = searchcruise.map((cruise) => {
          if (cruise.id_cruise === cruiseData.id_cruise) {
            cruise.isEditing = false;
            cruise.name_cruise = cruiseData.name_cruise;
            cruise.img_cruise = cruiseData.img_cruise;
            cruise.price_cruise = cruiseData.price_cruise;
            cruise.detail_cruise = cruiseData.detail_cruise;
            cruise.from_to_cruise = cruiseData.from_to_cruise;
            return cruise;
          }
          return cruise;
        });
        setSearchcruise(searchcruise);
        tourcruise = tourcruise.map((cruise) => {
          if (cruise.id_cruise === cruiseData.id_cruise) {
            cruise.isEditing = false;
            cruise.name_cruise = cruiseData.name_cruise;
            cruise.img_cruise = cruiseData.img_cruise;
            cruise.price_cruise = cruiseData.price_cruise;
            cruise.detail_cruise = cruiseData.detail_cruise;
            cruise.from_to_cruise = cruiseData.from_to_cruise;
            return cruise;
          }
          return cruise;
        });
        setTourCruise(tourcruise);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteCruise = (theID) => {
  // filter outing the user.
let cruiseDeleted = tourcruise.filter((cruise) => {
  return cruise.id_cruise !== theID;
});
let cruiseDeleteds = searchcruise.filter((cruise) => {
  return cruise.id_cruise !== theID;
});
fetch("http://localhost/khang/khang/project/php-react/delete_cruise.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ id: theID }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data.success) {
      setTourCruise(cruiseDeleted);
      setSearchcruise(cruiseDeleteds);
      if (tourcruise.length === 1) {
        setTourCruiseLength(0);
        setSearchcruiseLength(0);
      }
    } else {
      alert(data.msg);
    }
  })
  .catch((err) => {
    console.log(err);
  });
};
//End Tour Cruise









//Blog
let [blog, setBlog] = useState([]);
let [blogLength, setBlogLength] = useState(null);


const addBlog = (newBlog) => {
  fetch("http://localhost/khang/khang/project/php-react/add_blog.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBlog),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.id) {
        setBlog([
          {
            id: data.id,
            ...newBlog,
          },
          ...blog,
        ]);
        setBlogLength(true);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};


const editModeBlog = (id) => {
  blog = blog.map((blo) => {
    if (blo.id_blog === id) {
      blo.isEditing = true;
      return blo;
    }
    blo.isEditing = false;
    return blo;
  });
  setBlog(blog);
};

const cancelEditBlog = (id) => {
  blog = blog.map((blo) => {
    if (blo.id_blog === id) {
      blo.isEditing = false;
      return blo;
    }
    return blo;
  });
  setBlog(blog);
};

const updateBlog = (blogData) => {
  fetch("http://localhost/khang/khang/project/php-react/update_blog.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        blog = blog.map((blo) => {
          if (blo.id_blog === blogData.id_blog) {
            blo.isEditing = false;
            blo.author_blog = blogData.author_blog;
            blo.img_blog = blogData.img_blog;
            blo.time_blog = blogData.time_blog;
            blo.title_blog = blogData.title_blog;
            blo.content_blog = blogData.content_blog;
            return blo;
          }
          return blo;
        });
        setBlog(blog);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteBlog = (theID) => {
  // filter outing the user.
let blogDeleted = blog.filter((blo) => {
  return blo.id_blog !== theID;
});
fetch("http://localhost/khang/khang/project/php-react/delete_blog.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ id: theID }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data.success) {
      setBlog(blogDeleted);
      if (blog.length === 1) {
        setBlogLength(0);
      }
    } else {
      alert(data.msg);
    }
  })
  .catch((err) => {
    console.log(err);
  });
};
//End Blog













//Account
let [account, setAccount] = useState([]);
let [accountLength, setAccountLength] = useState(null);


const blockAccount = (theID) => {
  // filter outing the user.
fetch("http://localhost/khang/khang/project/php-react/block.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ id: theID }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data.success) {
      account = account.map((acc) => {
        if (acc.account_id === theID) {
          acc.account_status = "Block";
          return acc;
        }
        return acc;
      });
      setAccount(account);
    } else {
      alert(data.msg);
    }
  })
  .catch((err) => {
    console.log(err);
  });
};

const addAccount = (theID) => {
  // filter outing the user.
fetch("http://localhost/khang/khang/project/php-react/add_account.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ id: theID }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data.success) {
      account = account.map((acc) => {
        if (acc.account_id === theID) {
          acc.account_status = "Being active";
          return acc;
        }
        return acc;
      });
      setAccount(account);
    } else {
      alert(data.msg);
    }
  })
  .catch((err) => {
    console.log(err);
  });
};



//End Account













//Cart
let [cart, setCart] = useState([]);
let [cartLength, setCartLength] = useState(null);

const addCart = (theID) => {
  // filter outing the user.
fetch("http://localhost/khang/khang/project/php-react/add_cart.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ id: theID }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data.success) {
      cart = cart.map((car) => {
        if (car.id_cart === theID) {
          car.status = "Confirmed";
          return car;
        }
        return car;
      });
      setCart(cart);
    } else {
      alert(data.msg);
    }
  })
  .catch((err) => {
    console.log(err);
  });
};

const huyCart = (theID) => {
  // filter outing the user.
fetch("http://localhost/khang/khang/project/php-react/huy_cart.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ id: theID }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data.success) {
      cart = cart.map((car) => {
        if (car.id_cart === theID) {
          car.status = "Checking in";
          return car;
        }
        return car;
      });
      setCart(cart);
    } else {
      alert(data.msg);
    }
  })
  .catch((err) => {
    console.log(err);
  });
};

//EndCart

///////////////////////////////////////////////////////////////////////////////////////////
let [active, setActive] = useState([]);
let check="no";
let [activeLength, setActiveLength] = useState(null);

const login = (newActive) => {
  fetch("http://localhost/khang/khang/project/php-react/login.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newActive),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.id) {
        setActiveLength(true);
      } else {
        alert(data.msg);
        if (data.msg==="WELLCOME TO ADMIN !!!"){
             check="admin";
          setActive([
              {
                check: "admin",
                ...newActive,
              },
              ...active,
             ]);
        }else{
          setActive([
            {
              check: "",
              ...newActive,
            },
            ...active,
           ]);
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
    console.log(active);
};

/////////////////////////////////////////////////////////////////////////////
const logout = () => {
  // filter outing the user.
fetch("http://localhost/khang/khang/project/php-react/logout.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(),
})
.then((res) => {
  return res.json();
})
.then((data) => {
  if (data.success) {
    setActive([]);
    if (active.length === 1) {
      setActiveLength(0);
    }
  } else {
    alert(data.msg);
  }
})
.catch((err) => {
  console.log(err);
});
};
///////////////////////////////////////////////////////////////////////////////////////////////
let [signup, setSignup] = useState([]);
let [signupLength, setSignupLength] = useState(null);

let [signup2, setSignup2] = useState([]);
let [signup2Length, setSignup2Length] = useState(null);
let kt="";

const code = (newSignup) => {
  fetch("http://localhost/khang/khang/project/php-react/email_code.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSignup),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.id) {
        setSignup([
          {
            id: data.id,
            ...newSignup,
          },
          ...signup,
        ]);
        setSignupLength(true); 
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const signupAdd = (newSignup2) => {
  fetch("http://localhost/khang/khang/project/php-react/enter_signup.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSignup2),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.id) {
        setSignup2([
          {
            id: data.id,
            ...newSignup2,
          },
          ...signup2,
        ]);
        setSignup2Length(true);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

////////////////////////////////////////////////////////////////////////////////
let [contact, setContact] = useState([]);
let [contactLength, setContactLength] = useState(null);

const contact2 = (newContact) => {
  fetch("http://localhost/khang/khang/project/php-react/contact.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newContact),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.id) {
        setContact([
          {
            id: data.id,
            ...newContact,
          },
          ...contact,
        ]);
        setContactLength(true);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [password, setPassword] = useState([]);
let [passwordLength, setPasswordLength] = useState(null);

const forgotPassword = (newPassword) => {
  fetch("http://localhost/khang/khang/project/php-react/forgot_set.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPassword),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.id) {
        setPassword([
          {
            id: data.id,
            ...newPassword,
          },
          ...password,
        ]);
        setPasswordLength(true);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [change, setChange] = useState([]);
let [changeLength, setChangeLength] = useState(null);

const changePassword = (newChange) => {
  fetch("http://localhost/khang/khang/project/php-react/change_set.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newChange),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.id) {
        setChange([
          {
            id: data.id,
            ...newChange,
          },
          ...change,
        ]);
        setChangeLength(true);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [cartcruise, setCartcruise] = useState([]);
let [cartcruiseLength, setCartcruiseLength] = useState(null);

const addCartCruise = (newCartCruise,id_cruise,nCruise) => {

  fetch("http://localhost/khang/khang/project/php-react/add_cart_cruise.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([newCartCruise,{ id: id_cruise },nCruise]),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.id) {
        setCartcruise([
          {
            id: data.id,
            ...newCartCruise,
          },
          ...cartcruise,
        ]);
        setCartcruiseLength(true);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [carthot, setCarthot] = useState([]);
let [carthotLength, setCarthotLength] = useState(null);

const addCartHot = (newCartHot,id_hot,nHot) => {

  fetch("http://localhost/khang/khang/project/php-react/add_cart_hot.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([newCartHot,{ id: id_hot },nHot]),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.id) {
        setCarthot([
          {
            id: data.id,
            ...newCartHot,
          },
          ...carthot,
        ]);
        setCarthotLength(true);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [cartsport, setCartsport] = useState([]);
let [cartsportLength, setCartsportLength] = useState(null);

const addCartSport = (newCartSport,id_sport,nSport) => {

  fetch("http://localhost/khang/khang/project/php-react/add_cart_sport.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([newCartSport,{ id: id_sport },nSport]),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.id) {
        setCartsport([
          {
            id: data.id,
            ...newCartSport,
          },
          ...cartsport,
        ]);
        setCartsportLength(true);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const deleteHistory = (theID) => {
  // filter outing the user.
let historyDeleted = history.filter((his) => {
  return his.id_history !== theID;
});
fetch("http://localhost/khang/khang/project/php-react/delete_history.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ id: theID }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data.success) {
      setHistory(historyDeleted);
      if (history.length === 1) {
        setHistoryLength(0);
      }
    } else {
      alert(data.msg);
    }
  })
  .catch((err) => {
    console.log(err);
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const deleteCart = (theID) => {
  // filter outing the user.
let cartDeleted = cart.filter((car) => {
  return car.id_cart !== theID;
});
fetch("http://localhost/khang/khang/project/php-react/delete_cart.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ id: theID }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data.success) {
      setCart(cartDeleted);
      if (cart.length === 1) {
        setCartLength(0);
      }
    } else {
      alert(data.msg);
    }
  })
  .catch((err) => {
    console.log(err);
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [payment, setPayment] = useState([]);
let [paymentLength, setPaymentLength] = useState(null);

const paymen = (theID) => {
  // filter outing the user.
fetch("http://localhost/khang/khang/project/php-react/payment.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ id: theID }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data.success) {
      setPayment(data.payment.reverse());
      setPaymentLength(true);
    } else {
      setPaymentLength(0);
    }
  })
  .catch((err) => {
    console.log(err);
  });
};
////////////////////////////////////////////////////////////////////////////////////////////////
const addPayment = (name_user,email_user,name_tour,price_tour,from_to,check_in,check_out,adults,phone,address) => {
  // filter outing the user.
fetch("http://localhost/khang/khang/project/php-react/add_payment.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name:name_user,email:email_user,tour:name_tour,price:price_tour,from:from_to,check1:check_in,check2:check_out,adu:adults,pho:phone,add:address }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data.success) {
      
    } else {
      
    }
  })
  .catch((err) => {
    console.log(err);
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////
let [searchhot, setSearchhot] = useState([]);
let [searchhotLength, setSearchhotLength] = useState(null);

let [searchcruise, setSearchcruise] = useState([]);
let [searchcruiseLength, setSearchcruiseLength] = useState(null);

let [searchoffer, setSearchoffer] = useState([]);
let [searchofferLength, setSearchofferLength] = useState(null);

let [searchsport, setSearchsport] = useState([]);
let [searchsportLength, setSearchsportLength] = useState(null);

let [searchcapital, setSearchcapital] = useState([]);
let [searchcapitalLength, setSearchcapitalLength] = useState(null);

const searchsearch = (keysearch) => {
  // filter outing the user.
fetch("http://localhost/khang/khang/project/php-react/search.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(keysearch),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data.success) {
      setSearchhot(data.searchhot.reverse());
      setSearchhotLength(true);

      setSearchcruise(data.searchcruise.reverse());
      setSearchcruiseLength(true);

      setSearchcapital(data.searchcapital.reverse());
      setSearchcapitalLength(true);

      setSearchoffer(data.searchoffer.reverse());
      setSearchofferLength(true);

      setSearchsport(data.searchsport.reverse());
      setSearchsportLength(true);
    } else {
      setSearchhotLength(0);
      setSearchcruiseLength(0);
      setSearchcapitalLength(0);
      setSearchofferLength(0);
      setSearchsportLength(0);
    }
  })
  .catch((err) => {
    console.log(err);
  });
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [cartcapital, setCartcapital] = useState([]);
let [cartcapitalLength, setCartcapitalLength] = useState(null);

const addCartCapital = (newCartCapital,id_capital,nCapital) => {

  fetch("http://localhost/khang/khang/project/php-react/add_cart_capital.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([newCartCapital,{ id: id_capital },nCapital]),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.id) {
        setCartcapital([
          {
            id: data.id,
            ...newCartCapital,
          },
          ...cartcapital,
        ]);
        setCartcapitalLength(true);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [cartoffer, setCartoffer] = useState([]);
let [cartofferLength, setCartofferLength] = useState(null);

const addCartOffer = (newCartOffer,id_offer,nOffer) => {

  fetch("http://localhost/khang/khang/project/php-react/add_cart_offer.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([newCartOffer,{ id: id_offer },nOffer]),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.id) {
        setCartoffer([
          {
            id: data.id,
            ...newCartOffer,
          },
          ...cartoffer,
        ]);
        setCartofferLength(true);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [cmt, setCmt] = useState([]);
let [cmtLength, setCmtLength] = useState(null);

const addcmt = (newCmt,idcmt) => {
setCmt(newCmt);
  fetch("http://localhost/khang/khang/project/php-react/comment.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([newCmt,{ id: idcmt }]),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.id) {
        setCmt([
          {
            id: data.id,
            ...newCmt,
          },
          ...cmt,
        ]);
        setCmtLength(true);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [bl, setBl] = useState([]);
let [blLength, setBlLength] = useState(null);
let [comment, setComment] = useState([]);
let [commentLength, setCommentLength] = useState(null);

let [cmt1, setCmt1] = useState([]);
let [cmt1Length, setCmt1Length] = useState(null);
const blogblog = (theID) => {
  // filter outing the user.
fetch("http://localhost/khang/khang/project/php-react/blog_detail.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ id: theID }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data.success) {
      setBl(data.bl.reverse());
      setBlLength(true);
      setComment(data.comment.reverse());
      setCommentLength(true);

    } else {
      setBlLength(0);
      setCommentLength(0);
    }
  })
  .catch((err) => {
    console.log(err);
  });
};


let [mess, setMess] = useState([]);
let [messLength, setMessLength] = useState(null);
let [messad, setMessad] = useState([]);
let [messadLength, setMessadLength] = useState(null);

let [show, setShow] = useState([]);
let [showLength, setShowLength] = useState(null);

const addMess = (newMess) => {
  fetch("http://localhost/khang/khang/project/php-react/add_mess.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMess),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.id) {
        setMess([
          {
            id_mess: data.id,
            ...newMess,
          },
          ...mess,
        ]);
        setMessLength(true);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};


const addadmess = (newadMess,id_account) => {
  fetch("http://localhost/khang/khang/project/php-react/addmessadmin.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([newadMess,{ id: id_account }]),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.id) {
        setShow([
          {
            id_mess: data.id,
            ...newadMess,
          },
          ...show,
        ]);
        setShowLength(true);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};







const showmesss = (idmess) => {

  fetch("http://localhost/khang/khang/project/php-react/showmessage.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: idmess }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setShow(data.showmess.reverse());
        setShowLength(true);
      } else {
        setShowLength(0);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  

  return {
    login,
    blogblog,
    bl,
    comment,
    addcmt,
    cmt1,
    addMess,
    mess,
    messad,
    addadmess,
    showmesss,
    addCartCruise,
    addCartHot,
    searchsearch,
    searchhot,
    searchcruise,
    searchoffer,
    searchcapital,
    searchsport,
    addCartOffer,
    addCartSport,
    addCartCapital,
    forgotPassword,
    changePassword,
    contact2,
    signup,
    logout,
    code,
    kt,
    show,
    deleteHistory,
    history,
    signupAdd,
    active,
    check,
    payment,
    paymen,
    tourhot,
    cart,
    blog,
    deleteCart,
    touroffer,
    toursport,
    tourcapital,
    tourcruise,
    account,
    addCart,
    blockAccount,
    addAccount,
    editModeHot,
    editModeCruise,
    editModeCapital,
    editModeBlog,
    editModeOffer,
    editModeSport,
    cancelEditHot,
    cancelEditCruise,
    cancelEditBlog,
    cancelEditOffer,
    cancelEditCapital,
    cancelEditSport,
    updateHot,
    updateCruise,
    updateOffer,
    updateBlog,
    updateCapital,
    updateSport,
    addHot,
    addBlog,
    addCruise,
    addOffer,
    addCapital,
    addSport,
    huyCart,
    deleteHot,
    deleteBlog,
    deleteCruise,
    deleteOffer,
    deleteCapital,
    deleteSport,
    tourhotLength,
    toursportLength,
    tourofferLength,
    tourcapitalLength,
    tourcruiseLength,
    blogLength,
    accountLength,
    cartLength,
    addPayment
  };
};