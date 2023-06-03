(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405],
    {
        1313: function (e, a, t) {
            "use strict";
            t.r(a);
            var s = t(809),
                n = t.n(s),
                i = t(2447),
                l = t(4047),
                o = t(2700),
                r = t(4706),
                c = t(8127),
                d = t(4102),
                m = t(775),
                u = t(6265),
                v = t(7294),
                p = t.n(v),
                h = (t(9008), t(9755)),
                g = t.n(h),
                w = t(26),
                f = t(6428),
                x = (t(9143), t(7857)),
                N = t(7363),
                b = t(3333),
                y = t(9541),
                k = t(2780),
                C = p().createElement;
            function D(e) {
                var a = (function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var t,
                        s = (0, m.Z)(e);
                    if (a) {
                        var n = (0, m.Z)(this).constructor;
                        t = Reflect.construct(s, arguments, n);
                    } else t = s.apply(this, arguments);
                    return (0, d.Z)(this, t);
                };
            }
            var T = t(7546),
                F = t(8945),
                B = t(7918),
                Z = new B(),
                A =
                    (Z.utils.BN,
                    new F(),
                    (function (e) {
                        (0, c.Z)(t, e);
                        var a = D(t);
                        function t() {
                            var e, s;
                            (0, l.Z)(this, t);
                            for (var o = arguments.length, c = new Array(o), d = 0; d < o; d++) c[d] = arguments[d];
                            return (
                                (s = a.call.apply(a, [this].concat(c))),
                                (0, u.Z)(
                                    (0, r.Z)(s),
                                    "state",
                                    ((e = {
                                        walletAddress: "",
                                        connectbtnText: "Connect",
                                        connectbtnDisabled: !1,
                                        Connected: !1,
                                        connectModal: "none",
                                        TokenContractAddress: "0xfb1b29e497BCE8B268E488d2D6d3db8DF286777E",
                                        RewardContractAddress: "0x3c95ff077d8068c8d7eb631aef308df29e510303",
                                        TokenName: null,
                                        TokenSymbol: null,
                                        TokenDecimal: null,
                                        TotalSupply: 0,
                                        CirculationSupply: 0,
                                        tradeVolume: 0,
                                        TotalBurned: 0,
                                        TotalBurnedPer: 0,
                                        TotalDividendHolders: 0,
                                        top10_holders_ratio: 0,
                                        lp_holders: 0,
                                        per_of_lp_locked: 0,
                                        MarketCap: 0,
                                        Liquidity: 0,
                                        buybackFund: 0,
                                        claimbtnText: "Connect Wallet",
                                        tokenPriceinUSD: 0,
                                        tokenBalance: 0,
                                        totalDividends: 0,
                                        withdrawableDividends: 0,
                                        lastClaimTime: "Never",
                                        nextAutoClaim: "Processing",
                                        totalRewardsDistributed: 0,
                                        totalPendingRewards: 0,
                                        CurrentDividendProcessingIndex: null,
                                        PendingDividendHoldersCount: null,
                                        RewardsDistributionCompletion: null,
                                    }),
                                    (0, u.Z)(e, "connectModal", "none"),
                                    (0, u.Z)(e, "loader", "block"),
                                    (0, u.Z)(e, "content", "none"),
                                    (0, u.Z)(e, "currentAddr", ""),
                                    (0, u.Z)(e, "networkID", 0),
                                    (0, u.Z)(e, "tokenPrice", 0),
                                    (0, u.Z)(e, "tokenContract", null),
                                    e)
                                ),
                                (0, u.Z)(
                                    (0, r.Z)(s),
                                    "componentDidMount",
                                    (0, i.Z)(
                                        n().mark(function e() {
                                            var a, t, i, l, o, r, c, d, m, u, v, p, h, g, x, C, D, T, F, A, M, P, S, E, I, _, L, R, G, H, j, U, z, O, V;
                                            return n().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (
                                                                    ((document.title = "Dashboard | CatColor"),
                                                                    (a = "undefined" !== typeof window.ethereum),
                                                                    (s.walletConnectProvider = new N.Z({ rpc: { 56: "https://bsc-dataseed.binance.org/" }, chainId: 56, cacheProvider: !0, network: "binance" })),
                                                                    a)
                                                                ) {
                                                                    e.next = 9;
                                                                    break;
                                                                }
                                                                (t = new B.providers.HttpProvider("https://bsc-dataseed1.ninicoin.io")), (s.web3 = new B(t)), (s.networkId = 56), (e.next = 26);
                                                                break;
                                                            case 9:
                                                                return (
                                                                    (e.prev = 9),
                                                                    localStorage.getItem("walletconnect")
                                                                        ? window.localStorage.getItem("connected") && "yes" === window.localStorage.getItem("connected") && s.connectWalletConnect()
                                                                        : window.localStorage.getItem("connected") && "yes" === window.localStorage.getItem("connected") && s.Connect(),
                                                                    (e.next = 13),
                                                                    s.web3.eth.net.getId()
                                                                );
                                                            case 13:
                                                                return (s.networkId = e.sent), (e.next = 16), s.web3.eth.getAccounts();
                                                            case 16:
                                                                (s.accounts = e.sent), (s.currentAccount = s.accounts[0]), s.currentAccount && s.setState({ walletAddress: s.currentAccount }), (e.next = 26);
                                                                break;
                                                            case 21:
                                                                (e.prev = 21), (e.t0 = e.catch(9)), (i = new B.providers.HttpProvider("https://bsc-dataseed1.ninicoin.io")), (s.web3 = new B(i)), (s.networkId = 56);
                                                            case 26:
                                                                return (
                                                                    56 != s.networkId && ((l = new B.providers.HttpProvider("https://bsc-dataseed1.ninicoin.io")), (s.web3 = new B(l)), (s.networkId = 56)),
                                                                    (s.Instance = new s.web3.eth.Contract(b.Mt, s.state.TokenContractAddress)),
                                                                    (s.Instance2 = new s.web3.eth.Contract(y.Mt, s.state.RewardContractAddress)),
                                                                    (s.pcsContract = new s.web3.eth.Contract(k.Mt, "0x10ED43C718714eb63d5aA57B78B54704E256024E")),
                                                                    (e.next = 32),
                                                                    s.Instance.methods.name().call()
                                                                );
                                                            case 32:
                                                                return (o = e.sent), (e.next = 35), s.Instance.methods.symbol().call();
                                                            case 35:
                                                                return (r = e.sent), (e.next = 38), s.Instance.methods.decimals().call();
                                                            case 38:
                                                                return (c = e.sent), (e.next = 41), s.Instance.methods.totalSupply().call();
                                                            case 41:
                                                                return (d = e.sent), (d = parseFloat(d / Math.pow(10, c))), (e.next = 45), s.Instance.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();
                                                            case 45:
                                                                return (m = e.sent), (m = parseFloat(m / Math.pow(10, c))), (u = (m / d) * 100), (v = d - m), (e.next = 51), s.Instance.methods.getNumberOfDividendTokenHolders().call();
                                                            case 51:
                                                                return (p = e.sent), (e.next = 54), s.Instance.methods.getLastProcessedIndex().call();
                                                            case 54:
                                                                return (h = e.sent), (g = p - h), (x = (h / p) * 100), (e.next = 59), s.web3.eth.getBalance(s.state.TokenContractAddress);
                                                            case 59:
                                                                return (C = e.sent), (e.next = 62), Z.utils.fromWei(C, "ether");
                                                            case 62:
                                                                return (
                                                                    (C = e.sent),
                                                                    0,
                                                                    s.setState({
                                                                        TokenName: o,
                                                                        TokenSymbol: r,
                                                                        TokenDecimal: c,
                                                                        TotalSupply: d,
                                                                        TotalBurned: m,
                                                                        TotalBurnedPer: u,
                                                                        CirculationSupply: v,
                                                                        CurrentDividendProcessingIndex: h,
                                                                        PendingDividendHoldersCount: g,
                                                                        RewardsDistributionCompletion: x,
                                                                        buybackFund: C,
                                                                    }),
                                                                    s.currentAccount && (s.setState({ claimbtnText: "CLAIM" }), s.setState({ connectbtnDisabled: !0 })),
                                                                    (e.next = 68),
                                                                    s.Instance.methods.getTotalDividendsDistributed().call()
                                                                );
                                                            case 68:
                                                                return (
                                                                    (D = e.sent) > 0 && (D = parseFloat(D / Math.pow(10, 18))),
                                                                    (e.prev = 70),
                                                                    (e.next = 73),
                                                                    w.Z.get("tokens/" + s.state.TokenContractAddress).then(function (e) {
                                                                        return e.data.pairs;
                                                                    })
                                                                );
                                                            case 73:
                                                                return (
                                                                    (T = e.sent),
                                                                    (e.next = 76),
                                                                    w.Z.get("tokens/0x55d398326f99059fF775485246999027B3197955").then(function (e) {
                                                                        return e.data.pairs;
                                                                    })
                                                                );
                                                            case 76:
                                                                return (
                                                                    (F = e.sent),
                                                                    (s.BNBPriceInUSD = F[1].priceUsd),
                                                                    (e.next = 80),
                                                                    f.Z.get("56?contract_addresses=" + s.state.TokenContractAddress).then(function (e) {
                                                                        return e.data;
                                                                    })
                                                                );
                                                            case 80:
                                                                return (
                                                                    (A = e.sent),
                                                                    (M = A.result["0xfb1b29e497BCE8B268E488d2D6d3db8DF286777E"]),
                                                                    (P = 0),
                                                                    M.holders.map(function (e, a) {
                                                                        P += parseFloat(e.percent);
                                                                    }),
                                                                    (S = 0),
                                                                    M.lp_holders.map(function (e, a) {
                                                                        1 == e.is_locked && (S += parseFloat(e.percent));
                                                                    }),
                                                                    s.setState({ TotalDividendHolders: p, top10_holders_ratio: 100 * P, lp_holders: M.lp_holder_count, per_of_lp_locked: 100 * S }),
                                                                    1701414e6,
                                                                    (E = new Date().getTime()),
                                                                    (I = function (e) {
                                                                        return e < 10 && e >= 0 ? "0" + e : e;
                                                                    }),
                                                                    (_ = 1701414e6 - E),
                                                                    (L = Math.floor(_ / 864e5)),
                                                                    (R = Math.floor((_ % 864e5) / 36e5)),
                                                                    (G = Math.floor((_ % 36e5) / 6e4)),
                                                                    (H = Math.floor((_ % 6e4) / 1e3)),
                                                                    (j = L + " days, " + I(R) + ":" + I(G) + ":" + I(H)),
                                                                    (U = new s.web3.eth.Contract(b.Mt, "0x55d398326f99059fF775485246999027B3197955")),
                                                                    (e.next = 99),
                                                                    U.methods.balanceOf(s.state.RewardContractAddress).call()
                                                                );
                                                            case 99:
                                                                return (z = e.sent), (e.next = 102), Z.utils.fromWei(z, "ether");
                                                            case 102:
                                                                (z = e.sent), s.setState({ lp_locked_duration: j, Liquidity: T[0].liquidity.usd, tradeVolume: T[0].volume.h24, totalPendingRewards: z }), (e.next = 109);
                                                                break;
                                                            case 106:
                                                                (e.prev = 106), (e.t1 = e.catch(70)), console.log(e.t1);
                                                            case 109:
                                                                return (
                                                                    (e.prev = 109),
                                                                    (e.next = 112),
                                                                    s.pcsContract.methods
                                                                        .getAmountsOut("1000000000", ["0xfb1b29e497BCE8B268E488d2D6d3db8DF286777E", "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"])
                                                                        .call()
                                                                );
                                                            case 112:
                                                                (O = e.sent), (V = Number(O[2])), (V = parseFloat(V / Math.pow(10, 18))), s.setState({ tokenPriceinUSD: parseFloat(V).toFixed(12) }), (e.next = 122);
                                                                break;
                                                            case 118:
                                                                (e.prev = 118), (e.t2 = e.catch(109)), console.log(e.t2.message), s.setState({ tokenPriceinUSD: parseFloat(0).toFixed(12) });
                                                            case 122:
                                                                s.setState({ MarketCap: d * s.state.tokenPriceinUSD, totalRewardsDistributed: D }), s.setState({ loader: "none", content: "block" });
                                                            case 124:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                null,
                                                [
                                                    [9, 21],
                                                    [70, 106],
                                                    [109, 118],
                                                ]
                                            );
                                        })
                                    )
                                ),
                                (0, u.Z)((0, r.Z)(s), "test", function (e) {
                                    return Math.abs(Number(e)) >= 1e12
                                        ? { value: (Math.abs(Number(e)) / 1e12).toFixed(2), symbol: "T" }
                                        : Math.abs(Number(e)) >= 1e9
                                        ? { value: (Math.abs(Number(e)) / 1e9).toFixed(2), symbol: "B" }
                                        : Math.abs(Number(e)) >= 1e6
                                        ? { value: (Math.abs(Number(e)) / 1e6).toFixed(2), symbol: "M" }
                                        : Math.abs(Number(e)) >= 1e3
                                        ? { value: (Math.abs(Number(e)) / 1e3).toFixed(2), symbol: "K" }
                                        : { value: Math.abs(Number(e)).toFixed(2), symbol: "" };
                                }),
                                (0, u.Z)(
                                    (0, r.Z)(s),
                                    "connectedBTNClick",
                                    (0, i.Z)(
                                        n().mark(function e() {
                                            return n().wrap(function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            g()("#connected").toggleClass("show");
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    )
                                ),
                                (0, u.Z)(
                                    (0, r.Z)(s),
                                    "connectBTNClick",
                                    (0, i.Z)(
                                        n().mark(function e() {
                                            return n().wrap(function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            g()("#connectModal").css("display", "block");
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    )
                                ),
                                (0, u.Z)(
                                    (0, r.Z)(s),
                                    "disconnect",
                                    (0, i.Z)(
                                        n().mark(function e() {
                                            return n().wrap(function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            s.setState({ connectbtnDisabled: !1, connectbtnText: "Connect", Connected: !1 }), window.localStorage.setItem("connected", "no"), document.location.reload();
                                                        case 3:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    )
                                ),
                                (0, u.Z)(
                                    (0, r.Z)(s),
                                    "connectMetamask",
                                    (0, i.Z)(
                                        n().mark(function e() {
                                            return n().wrap(function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            window.ethereum ? s.Connect() : alert("Please install Metamask first");
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    )
                                ),
                                (0, u.Z)(
                                    (0, r.Z)(s),
                                    "Connect",
                                    (0, i.Z)(
                                        n().mark(function e() {
                                            var a;
                                            return n().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (!window.ethereum) {
                                                                    e.next = 23;
                                                                    break;
                                                                }
                                                                return (s.web3 = new B(window.ethereum)), (e.prev = 2), (e.next = 5), window.ethereum.request({ method: "eth_requestAccounts" });
                                                            case 5:
                                                                return (e.next = 7), window.ethereum.request({ method: "eth_accounts" });
                                                            case 7:
                                                                return (
                                                                    (a = e.sent),
                                                                    (s.currentAccount = a[0]),
                                                                    s.holderInfo(s.currentAccount),
                                                                    window.localStorage.setItem("connected", "yes"),
                                                                    g()("#alert").css("display", "none"),
                                                                    g()("#walletAddress").val(s.currentAccount),
                                                                    g()("#connectModal").css("display", "none"),
                                                                    g()(".btn-close").trigger("click"),
                                                                    s.setState({ claimbtnText: "CLAIM", connectbtnText: "Connected", Connected: !0 }),
                                                                    s.setState({ connectbtnDisabled: !0 }),
                                                                    e.abrupt("return")
                                                                );
                                                            case 20:
                                                                (e.prev = 20), (e.t0 = e.catch(2)), console.error(e.t0);
                                                            case 23:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                null,
                                                [[2, 20]]
                                            );
                                        })
                                    )
                                ),
                                (0, u.Z)(
                                    (0, r.Z)(s),
                                    "connectWalletConnect",
                                    (0, i.Z)(
                                        n().mark(function e() {
                                            var a;
                                            return n().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (e.prev = 0), (e.next = 3), s.walletConnectProvider.enable();
                                                            case 3:
                                                                return (s.web3 = new B(s.walletConnectProvider)), (e.next = 6), s.web3.eth.getAccounts();
                                                            case 6:
                                                                (a = e.sent),
                                                                    (s.currentAccount = a[0]),
                                                                    s.holderInfo(s.currentAccount),
                                                                    window.localStorage.setItem("connected", "yes"),
                                                                    s.setState({ claimbtnText: "CLAIM", connectbtnText: "Connected", Connected: !0 }),
                                                                    s.setState({ connectbtnDisabled: !0 }),
                                                                    g()("#walletAddress").val(s.currentAccount),
                                                                    g()("#alert").css("display", "none"),
                                                                    g()("#connectModal").css("display", "none"),
                                                                    g()(".btn-close").trigger("click"),
                                                                    (e.next = 21);
                                                                break;
                                                            case 18:
                                                                (e.prev = 18), (e.t0 = e.catch(0)), console.log(e.t0);
                                                            case 21:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                null,
                                                [[0, 18]]
                                            );
                                        })
                                    )
                                ),
                                (0, u.Z)(
                                    (0, r.Z)(s),
                                    "handleChange",
                                    (function () {
                                        var e = (0, i.Z)(
                                            n().mark(function e(a) {
                                                var t;
                                                return n().wrap(function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                (t = a.target.value), a.target.value > 0 && s.holderInfo(t);
                                                            case 2:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                }, e);
                                            })
                                        );
                                        return function (a) {
                                            return e.apply(this, arguments);
                                        };
                                    })()
                                ),
                                (0, u.Z)(
                                    (0, r.Z)(s),
                                    "claim",
                                    (0, i.Z)(
                                        n().mark(function e() {
                                            var a;
                                            return n().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (((e.prev = 0), 56 != s.networkId)) {
                                                                    e.next = 11;
                                                                    break;
                                                                }
                                                                if (!s.currentAccount) {
                                                                    e.next = 10;
                                                                    break;
                                                                }
                                                                return (
                                                                    s.setState({ loaded: !0, claimbtnText: "Processing..." }),
                                                                    (a = new s.web3.eth.Contract(b.Mt, s.state.TokenContractAddress)),
                                                                    (e.next = 7),
                                                                    a.methods.claim().send({ from: s.currentAccount })
                                                                );
                                                            case 7:
                                                                s.setState({ loaded: !1, claimbtnText: "CLAIM" }), (e.next = 11);
                                                                break;
                                                            case 10:
                                                                g()("#connectModal").css("display", "block");
                                                            case 11:
                                                                e.next = 17;
                                                                break;
                                                            case 13:
                                                                (e.prev = 13), (e.t0 = e.catch(0)), s.setState({ loaded: !1, claimbtnText: "CLAIM" }), console.log(e.t0);
                                                            case 17:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                null,
                                                [[0, 13]]
                                            );
                                        })
                                    )
                                ),
                                (0, u.Z)(
                                    (0, r.Z)(s),
                                    "holderInfo",
                                    (function () {
                                        var e = (0, i.Z)(
                                            n().mark(function e(a) {
                                                var t, i, l, o, r, c, d, m, u, v, p, h, g, w, f, x, N;
                                                return n().wrap(function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (((s.Instance = new s.web3.eth.Contract(b.Mt, s.state.TokenContractAddress)), !T.validate(a, "ETH", "both"))) {
                                                                    e.next = 39;
                                                                    break;
                                                                }
                                                                return s.setState({ walletAddress: a }), (e.next = 6), s.Instance.methods.balanceOf(a).call();
                                                            case 6:
                                                                return (t = e.sent), (e.next = 9), Z.utils.fromWei(t, "gwei");
                                                            case 9:
                                                                return (i = e.sent), s.setState({ tokenBalance: i }), (e.next = 13), s.Instance.methods.getAccountDividendsInfo(a).call();
                                                            case 13:
                                                                if (
                                                                    ((l = e.sent),
                                                                    (o = l[4]) > 0 && (o = parseFloat(o / Math.pow(10, 18))),
                                                                    (r = l[5]) > 0
                                                                        ? ((c = new Date(1e3 * r)),
                                                                          (d = new Date()),
                                                                          (m = d.getTime() - c.getTime()),
                                                                          (u = Math.floor(m / 1e3 / 60 / 60 / 24)),
                                                                          (m -= 1e3 * u * 60 * 60 * 24),
                                                                          (v = Math.floor(m / 1e3 / 60 / 60)),
                                                                          (m -= 1e3 * v * 60 * 60),
                                                                          (p = Math.ceil(m / 1e3 / 60)),
                                                                          (m -= 1e3 * p * 60),
                                                                          (h = Math.floor(m / 1e3)),
                                                                          (m -= 1e3 * h),
                                                                          (r = u >= 1 ? u + " Days Ago" : v >= 1 ? v + " Hours Ago" : p >= 1 ? p + " Minutes Ago" : h + " Seconds Ago"))
                                                                        : (r = "Never"),
                                                                    (g = l[7]) > 0 && ((g = Math.ceil(g / 60) + "m"), s.setState({ nextAutoClaim: "Processing" })),
                                                                    0 != g)
                                                                ) {
                                                                    e.next = 36;
                                                                    break;
                                                                }
                                                                if (!(l[3] > 0)) {
                                                                    e.next = 34;
                                                                    break;
                                                                }
                                                                return (e.t0 = Number), (e.next = 25), s.Instance.methods.getNumberOfDividendTokenHolders().call();
                                                            case 25:
                                                                (e.t1 = e.sent), (w = (0, e.t0)(e.t1)), (f = l[2]), (x = ((f / w) * 100).toFixed(0)), (g = 100 - x + "%"), s.setState({ nextAutoClaim: "Processing" }), (e.next = 36);
                                                                break;
                                                            case 34:
                                                                (g = "0%"), s.setState({ nextAutoClaim: "Processing" });
                                                            case 36:
                                                                (N = (N = l[3]) > 0 ? parseFloat(N / Math.pow(10, 18)) : 0), s.setState({ lastClaimTime: r, withdrawableDividends: N, totalDividends: o });
                                                            case 39:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                }, e);
                                            })
                                        );
                                        return function (a) {
                                            return e.apply(this, arguments);
                                        };
                                    })()
                                ),
                                s
                            );
                        }
                        return (
                            (0, o.Z)(t, [
                                {
                                    key: "render",
                                    value: function () {
                                        return C(
                                            p().Fragment,
                                            null,
                                            C(
                                                "div",
                                                { id: "root" },
                                                C(
                                                    "div",
                                                    { className: "wrapper vertical-layout navbar-floating footer-static vertical-overlay-menu menu-hide", id: "menu" },
                                                    C(
                                                        "div",
                                                        { className: "main-menu menu-fixed menu-accordion menu-shadow expanded menu-light" },
                                                        C(
                                                            "div",
                                                            { className: "navbar-header" },
                                                            C(
                                                                "ul",
                                                                { className: "nav navbar-nav flex-row" },
                                                                C(
                                                                    "li",
                                                                    { className: "nav-item me-auto" },
                                                                    C(
                                                                        "a",
                                                                        { href: "index.html", className: "navbar-brand" },
                                                                        C(
                                                                            "span",
                                                                            { style: { color: "#FFF", fontWeight: "bold" }, className: "brand-logo" },
                                                                            C("img", { src: "/media/logo.png", alt: "CatColor  Token", style: { borderRadius: "50%", paddingRight: "10px" } }),
                                                                            "CatColor"
                                                                        )
                                                                    )
                                                                ),
                                                                C(
                                                                    "li",
                                                                    { className: "nav-item nav-toggle" },
                                                                    C(
                                                                        "div",
                                                                        { className: "nav-link modern-nav-toggle cursor-pointer" },
                                                                        C(
                                                                            "svg",
                                                                            {
                                                                                id: "hideSideMenu",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                width: "20",
                                                                                height: "20",
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "#FFE751",
                                                                                stroke: "#FFE751",
                                                                                "stroke-width": "2",
                                                                                "stroke-linecap": "round",
                                                                                "stroke-linejoin": "round",
                                                                                className: "toggle-icon icon-x d-block",
                                                                            },
                                                                            C("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                                                                            C("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        C("div", { className: "shadow-bottom" }),
                                                        C(
                                                            "div",
                                                            { className: "scrollbar-container main-menu-content ps" },
                                                            C(
                                                                "ul",
                                                                { className: "navigation navigation-main" },
                                                                C(
                                                                    "li",
                                                                    { id: "dash", className: "nav-item active" },
                                                                    C(
                                                                        "a",
                                                                        { className: "d-flex align-items-center", href: "index.html" },
                                                                        C(
                                                                            "svg",
                                                                            {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                width: "20",
                                                                                height: "20",
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                "stroke-width": "2",
                                                                                "stroke-linecap": "round",
                                                                                "stroke-linejoin": "round",
                                                                            },
                                                                            C("circle", { cx: "12", cy: "12", r: "2" }),
                                                                            C("path", { d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" })
                                                                        ),
                                                                        C("span", { className: "menu-item text-truncate" }, "Dashboard")
                                                                    )
                                                                ),
                                                                C(
                                                                    "li",
                                                                    { className: "nav-item" },
                                                                    C(
                                                                        "a",
                                                                        { className: "d-flex align-items-center", target: "_blank", href: "https://swap.catcolor.live/" },
                                                                        C(
                                                                            "svg",
                                                                            { xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", role: "img", width: "20", height: "20", preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 24 24" },
                                                                            C("path", { fill: "currentColor", d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm0-13H8v2h9l-5-5v3zm-5 4l5 5v-3h4v-2H7z" })
                                                                        ),
                                                                        C("span", { className: "menu-item text-truncate" }, "Buy")
                                                                    )
                                                                ),
                                                                C(
                                                                    "li",
                                                                    { className: "nav-item" },
                                                                    C("a", { className: "d-flex align-items-center", href: "#" }, C("span", { style: { color: "#FFE751" }, className: "menu-item text-truncate" }, "SOCIAL MEDIA"))
                                                                ),
                                                                C(
                                                                    "li",
                                                                    { className: "nav-item" },
                                                                    C(
                                                                        "a",
                                                                        { className: "d-flex align-items-center", target: "_blank", href: "https://t.me/CatColor" },
                                                                        C(
                                                                            "svg",
                                                                            { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 256 256" },
                                                                            C(
                                                                                "defs",
                                                                                null,
                                                                                C(
                                                                                    "linearGradient",
                                                                                    { id: "logosTelegram0", x1: "50%", x2: "50%", y1: "0%", y2: "100%" },
                                                                                    C("stop", { offset: "0%", "stop-color": "#2AABEE" }),
                                                                                    C("stop", { offset: "100%", "stop-color": "#229ED9" })
                                                                                )
                                                                            ),
                                                                            C("path", {
                                                                                fill: "#FFF",
                                                                                d:
                                                                                    "M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z",
                                                                            }),
                                                                            C("path", {
                                                                                fill: "#000",
                                                                                d:
                                                                                    "M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072Z",
                                                                            })
                                                                        ),
                                                                        C("span", { className: "menu-item text-truncate" }, "Telegram")
                                                                    )
                                                                ),
                                                                C(
                                                                    "li",
                                                                    { className: "nav-item" },
                                                                    C(
                                                                        "a",
                                                                        { className: "d-flex align-items-center", target: "_blank", href: "https://twitter.com/CatColorToken" },
                                                                        C(
                                                                            "svg",
                                                                            { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 1024 1024" },
                                                                            C("path", {
                                                                                fill: "white",
                                                                                d:
                                                                                    "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6z",
                                                                            })
                                                                        ),
                                                                        C("span", { className: "menu-item text-truncate" }, "Twitter")
                                                                    )
                                                                )
                                                            ),
                                                            C("div", { className: "ps__rail-x", style: { left: "0px", bottom: "0px" } }, C("div", { className: "ps__thumb-x", tabindex: "0", style: { left: "0px", width: "0px" } })),
                                                            C("div", { className: "ps__rail-y", style: { top: "0px", right: "1px" } }, C("div", { className: "ps__thumb-y", tabindex: "0", style: { top: "0px", height: "0px" } }))
                                                        )
                                                    ),
                                                    C(
                                                        "nav",
                                                        { className: "header-navbar navbar align-items-center floating-nav navbar-shadow navbar navbar-expand-lg navbar-light" },
                                                        C(
                                                            "div",
                                                            { className: "navbar-container d-flex content" },
                                                            C(
                                                                "ul",
                                                                { className: "navbar-nav" },
                                                                C(
                                                                    "li",
                                                                    { className: "mobile-menu me-auto d-flex align-items-center nav-item" },
                                                                    C(
                                                                        "a",
                                                                        { id: "showSideMenu", className: "nav-menu-main menu-toggle hidden-xs is-active nav-link" },
                                                                        C(
                                                                            "svg",
                                                                            {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                width: "24",
                                                                                height: "24",
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "#FFE751",
                                                                                stroke: "#FFE751",
                                                                                "stroke-width": "2",
                                                                                "stroke-linecap": "round",
                                                                                "stroke-linejoin": "round",
                                                                                className: "ficon",
                                                                            },
                                                                            C("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
                                                                            C("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
                                                                            C("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            C(
                                                                "div",
                                                                { className: "bookmark-wrapper d-flex align-items-center" },
                                                                C(
                                                                    "li",
                                                                    { className: "d-none d-lg-block nav-item" },
                                                                    C(
                                                                        "a",
                                                                        { className: "nav-link-style nav-link" },
                                                                        C(
                                                                            "svg",
                                                                            {
                                                                                id: "showDarkMode",
                                                                                style: { display: "none" },
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                width: "24",
                                                                                height: "24",
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "#FFE751",
                                                                                stroke: "#FFE751",
                                                                                "stroke-width": "2",
                                                                                "stroke-linecap": "round",
                                                                                "stroke-linejoin": "round",
                                                                                className: "ficon",
                                                                            },
                                                                            C("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" })
                                                                        ),
                                                                        C(
                                                                            "svg",
                                                                            {
                                                                                id: "showLightMode",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                width: "24",
                                                                                height: "24",
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "#FFE751",
                                                                                stroke: "#FFE751",
                                                                                "stroke-width": "2",
                                                                                "stroke-linecap": "round",
                                                                                "stroke-linejoin": "round",
                                                                                className: "ficon",
                                                                            },
                                                                            C("circle", { cx: "12", cy: "12", r: "5" }),
                                                                            C("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
                                                                            C("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
                                                                            C("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
                                                                            C("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
                                                                            C("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
                                                                            C("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
                                                                            C("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
                                                                            C("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            C(
                                                                "ul",
                                                                { style: { display: "flex" }, className: "nav navbar-nav align-items-center ms-auto" },
                                                                C(
                                                                    "span",
                                                                    null,
                                                                    !0 === this.state.Connected
                                                                        ? C(
                                                                              p().Fragment,
                                                                              null,
                                                                              C(
                                                                                  "div",
                                                                                  null,
                                                                                  C(
                                                                                      "li",
                                                                                      { id: "connected", className: "dropdown-user nav-item dropdown" },
                                                                                      C(
                                                                                          "a",
                                                                                          { href: "#", onClick: this.connectedBTNClick, "aria-haspopup": "true", className: "nav-link dropdown-user-link", "aria-expanded": "false" },
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "user-nav d-sm-flex d-none" },
                                                                                              C("span", { className: "user-name fw-bold" }, this.currentAccount.substring(0, 7) + "..." + this.currentAccount.substring(35, 42))
                                                                                          ),
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "avatar" },
                                                                                              C("img", { className: "", src: "/media/logo.png", alt: "avatarImg", height: "40", width: "40" }),
                                                                                              C("span", { className: "avatar-status-online" })
                                                                                          )
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { tabindex: "-1", role: "menu", "aria-hidden": "true", className: "dropdown-menu dropdown-menu-end" },
                                                                                          C(
                                                                                              "a",
                                                                                              { onClick: this.disconnect, tabindex: "0", role: "menuitem", className: "dropdown-item", href: "#" },
                                                                                              C(
                                                                                                  "svg",
                                                                                                  {
                                                                                                      xmlns: "http://www.w3.org/2000/svg",
                                                                                                      width: "14",
                                                                                                      height: "14",
                                                                                                      viewBox: "0 0 24 24",
                                                                                                      fill: "none",
                                                                                                      stroke: "#FFE751",
                                                                                                      "stroke-width": "2",
                                                                                                      "stroke-linecap": "round",
                                                                                                      "stroke-linejoin": "round",
                                                                                                      className: "me-75",
                                                                                                  },
                                                                                                  C("path", { d: "M18.36 6.64a9 9 0 1 1-12.73 0" }),
                                                                                                  C("line", { x1: "12", y1: "2", x2: "12", y2: "12" })
                                                                                              ),
                                                                                              C("span", { className: "align-middle" }, "Disconnect")
                                                                                          )
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                        : C(
                                                                              p().Fragment,
                                                                              null,
                                                                              C(
                                                                                  "button",
                                                                                  {
                                                                                      onClick: this.connectBTNClick,
                                                                                      disabled: this.state.connectbtnDisabled,
                                                                                      id: "btn-connect",
                                                                                      type: "button",
                                                                                      className: "waves-effect round btn btn-outline-primary btn-sm",
                                                                                  },
                                                                                  C("span", { style: { color: "currentColor" }, className: "align-middle ms-25" }, this.state.connectbtnText),
                                                                                  C(
                                                                                      "svg",
                                                                                      { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 512 512", style: { marginLeft: "5px" } },
                                                                                      C("path", {
                                                                                          fill: "#050505",
                                                                                          d:
                                                                                              "M95.5 104h320a87.73 87.73 0 0 1 11.18.71a66 66 0 0 0-77.51-55.56L86 94.08h-.3a66 66 0 0 0-41.07 26.13A87.57 87.57 0 0 1 95.5 104Zm320 24h-320a64.07 64.07 0 0 0-64 64v192a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V192a64.07 64.07 0 0 0-64-64ZM368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z",
                                                                                      }),
                                                                                      C("path", {
                                                                                          fill: "#050505",
                                                                                          d: "M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16s-18.5 24.5 0 24.5s0 23.5 0 23.5L85.5 236Z",
                                                                                      })
                                                                                  )
                                                                              )
                                                                          )
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                C("div", { className: "Toastify" })
                                            ),
                                            C(
                                                "div",
                                                { className: "app-content content overflow-hidden" },
                                                C("div", { className: "content-overlay" }),
                                                C("div", { className: "header-navbar-shadow" }),
                                                C(
                                                    "div",
                                                    { className: "content-wrapper animate__animated animate__fadeIn" },
                                                    C(
                                                        "div",
                                                        null,
                                                        this.currentAccount
                                                            ? C(p().Fragment, null)
                                                            : C(
                                                                  p().Fragment,
                                                                  null,
                                                                  C(
                                                                      "div",
                                                                      { id: "alert", className: "alert alert-primary fade show", role: "alert" },
                                                                      C(
                                                                          "div",
                                                                          { className: "alert-body" },
                                                                          C(
                                                                              "svg",
                                                                              {
                                                                                  xmlns: "http://www.w3.org/2000/svg",
                                                                                  width: "15",
                                                                                  height: "15",
                                                                                  viewBox: "0 0 24 24",
                                                                                  fill: "none",
                                                                                  stroke: "currentColor",
                                                                                  "stroke-width": "2",
                                                                                  "stroke-linecap": "round",
                                                                                  "stroke-linejoin": "round",
                                                                              },
                                                                              C("circle", { cx: "12", cy: "12", r: "10" }),
                                                                              C("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
                                                                              C("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
                                                                          ),
                                                                          C("span", { className: "ms-1" }, "Please connect your wallet or enter the valid wallet address to see user specific token balance.")
                                                                      )
                                                                  )
                                                              ),
                                                        C(
                                                            "div",
                                                            { className: "row", style: { marginBottom: "20px" } },
                                                            C(
                                                                "div",
                                                                { className: "col-sm-12 col-md-12 col-lg-12" },
                                                                C(
                                                                    "div",
                                                                    { className: "input-group-merge mb-1 input-group" },
                                                                    C(
                                                                        "span",
                                                                        { className: "input-group-text" },
                                                                        C(
                                                                            "svg",
                                                                            {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                width: "15",
                                                                                height: "15",
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "#FFE751",
                                                                                stroke: "currentColor",
                                                                                "stroke-width": "2",
                                                                                "stroke-linecap": "round",
                                                                                "stroke-linejoin": "round",
                                                                            },
                                                                            C("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
                                                                            C("circle", { cx: "12", cy: "7", r: "4" })
                                                                        )
                                                                    ),
                                                                    C("input", {
                                                                        id: "walletAddress",
                                                                        name: "Account Address",
                                                                        onChange: this.handleChange,
                                                                        defaultValue: this.state.walletAddress,
                                                                        placeholder: "Connected wallet address",
                                                                        type: "text",
                                                                        className: "form-control",
                                                                    })
                                                                )
                                                            )
                                                        ),
                                                        C(
                                                            "div",
                                                            { className: "row" },
                                                            C(
                                                                "div",
                                                                { className: "col-sm-12 col-md-6 col-lg-6" },
                                                                C(
                                                                    "div",
                                                                    { className: "card" },
                                                                    C(
                                                                        "div",
                                                                        { className: "card-body" },
                                                                        C(
                                                                            "div",
                                                                            { className: "d-flex justify-content-between align-items-center" },
                                                                            C(
                                                                                "div",
                                                                                null,
                                                                                "none" == this.state.loader
                                                                                    ? C(
                                                                                          p().Fragment,
                                                                                          null,
                                                                                          C(
                                                                                              "h2",
                                                                                              null,
                                                                                              C(x.ZP, {
                                                                                                  className: "account-balance",
                                                                                                  start: 0,
                                                                                                  end: this.state.tokenBalance * this.state.tokenPriceinUSD,
                                                                                                  duration: 2.75,
                                                                                                  useEasing: !0,
                                                                                                  useGrouping: !0,
                                                                                                  separator: ",",
                                                                                                  decimals: 2,
                                                                                                  decimal: ".",
                                                                                                  prefix: "$",
                                                                                                  suffix: "",
                                                                                              })
                                                                                          )
                                                                                      )
                                                                                    : C(
                                                                                          p().Fragment,
                                                                                          null,
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "widget-loader" },
                                                                                              C("div", { role: "status", className: "spinner-grow text-primary" }, C("span", { className: "visually-hidden" }, "Loading..."))
                                                                                          )
                                                                                      ),
                                                                                C("p", { className: "card-text" }, "Your holdings"),
                                                                                C(
                                                                                    "h2",
                                                                                    { style: { fontSize: "20px", color: "#28a745" } },
                                                                                    C(
                                                                                        "span",
                                                                                        { className: "account-balance" },
                                                                                        C(x.ZP, {
                                                                                            className: "account-balance",
                                                                                            start: 0,
                                                                                            end: this.test(this.state.tokenBalance).value,
                                                                                            duration: 2.75,
                                                                                            useEasing: !0,
                                                                                            useGrouping: !0,
                                                                                            separator: ",",
                                                                                            decimals: 2,
                                                                                            decimal: ".",
                                                                                            prefix: "",
                                                                                            suffix: this.test(this.state.tokenBalance).symbol,
                                                                                        })
                                                                                    ),
                                                                                    C("span", { style: { color: "#CBCBCB" }, className: "account-balance" }, " CATCOLOR")
                                                                                )
                                                                            ),
                                                                            C(
                                                                                "div",
                                                                                { className: "avatar avatar-stats p-50 m-0 bg-light-primary" },
                                                                                C(
                                                                                    "div",
                                                                                    { className: "avatar-content" },
                                                                                    C(
                                                                                        "svg",
                                                                                        {
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            width: "80",
                                                                                            height: "80",
                                                                                            viewBox: "0 0 24 24",
                                                                                            fill: "none",
                                                                                            stroke: "#FFE751",
                                                                                            "stroke-width": "2",
                                                                                            "stroke-linecap": "round",
                                                                                            "stroke-linejoin": "round",
                                                                                        },
                                                                                        C("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" }),
                                                                                        C("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" })
                                                                                    )
                                                                                )
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            C(
                                                                "div",
                                                                { className: "col-sm-12 col-md-6 col-lg-6" },
                                                                C(
                                                                    "div",
                                                                    { className: "card" },
                                                                    C(
                                                                        "div",
                                                                        { className: "card-body" },
                                                                        C(
                                                                            "div",
                                                                            { className: "d-flex justify-content-between align-items-center" },
                                                                            C(
                                                                                "div",
                                                                                null,
                                                                                "none" == this.state.loader
                                                                                    ? C(
                                                                                          p().Fragment,
                                                                                          null,
                                                                                          C(
                                                                                              "h2",
                                                                                              null,
                                                                                              C(x.ZP, {
                                                                                                  className: "account-balance",
                                                                                                  start: 0,
                                                                                                  end: this.state.totalDividends * this.BNBPriceInUSD,
                                                                                                  duration: 2.75,
                                                                                                  useEasing: !0,
                                                                                                  useGrouping: !0,
                                                                                                  separator: ",",
                                                                                                  decimals: 4,
                                                                                                  decimal: ".",
                                                                                                  prefix: "$",
                                                                                                  suffix: "",
                                                                                              })
                                                                                          )
                                                                                      )
                                                                                    : C(
                                                                                          p().Fragment,
                                                                                          null,
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "widget-loader" },
                                                                                              C("div", { role: "status", className: "spinner-grow text-primary" }, C("span", { className: "visually-hidden" }, "Loading..."))
                                                                                          )
                                                                                      ),
                                                                                C("p", { className: "card-text" }, "Paid Rewards"),
                                                                                C(
                                                                                    "h2",
                                                                                    { style: { fontSize: "20px", color: "#28a745" } },
                                                                                    C(
                                                                                        "span",
                                                                                        { className: "account-balance" },
                                                                                        C(x.ZP, {
                                                                                            className: "account-balance",
                                                                                            start: 0,
                                                                                            end: this.state.totalDividends,
                                                                                            duration: 2.75,
                                                                                            useEasing: !0,
                                                                                            useGrouping: !0,
                                                                                            separator: ",",
                                                                                            decimals: 4,
                                                                                            decimal: ".",
                                                                                            prefix: "",
                                                                                            suffix: "",
                                                                                        })
                                                                                    ),
                                                                                    C("span", { style: { color: "#CBCBCB" }, className: "account-balance" }, " USDT")
                                                                                )
                                                                            ),
                                                                            C(
                                                                                "div",
                                                                                { className: "avatar avatar-stats p-50 m-0 bg-light-primary" },
                                                                                C(
                                                                                    "div",
                                                                                    { className: "avatar-content" },
                                                                                    C(
                                                                                        "svg",
                                                                                        {
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            width: "80",
                                                                                            height: "80",
                                                                                            viewBox: "0 0 24 24",
                                                                                            fill: "none",
                                                                                            stroke: "#FFE751",
                                                                                            "stroke-width": "2",
                                                                                            "stroke-linecap": "round",
                                                                                            "stroke-linejoin": "round",
                                                                                        },
                                                                                        C("polyline", { points: "20 12 20 22 4 22 4 12" }),
                                                                                        C("rect", { x: "2", y: "7", width: "20", height: "5" }),
                                                                                        C("line", { x1: "12", y1: "22", x2: "12", y2: "7" }),
                                                                                        C("path", { d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" }),
                                                                                        C("path", { d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" })
                                                                                    )
                                                                                )
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            C(
                                                                "div",
                                                                { className: "col-sm-12 col-md-6 col-lg-6" },
                                                                C(
                                                                    "div",
                                                                    { className: "card" },
                                                                    C(
                                                                        "div",
                                                                        { className: "card-body" },
                                                                        C(
                                                                            "div",
                                                                            { className: "d-flex justify-content-between align-items-center" },
                                                                            C(
                                                                                "div",
                                                                                null,
                                                                                "none" == this.state.loader
                                                                                    ? C(p().Fragment, null, C("h2", null, this.state.lastClaimTime))
                                                                                    : C(
                                                                                          p().Fragment,
                                                                                          null,
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "widget-loader" },
                                                                                              C("div", { role: "status", className: "spinner-grow text-primary" }, C("span", { className: "visually-hidden" }, "Loading..."))
                                                                                          )
                                                                                      ),
                                                                                C("p", { className: "card-text" }, "Last Payout Time"),
                                                                                C(
                                                                                    "h2",
                                                                                    { style: { fontSize: "20px", color: "#28a745" } },
                                                                                    C("span", { className: "account-balance" }, this.state.nextAutoClaim),
                                                                                    C("span", { style: { color: "#CBCBCB" }, className: "account-balance" }, " Auto Payout")
                                                                                )
                                                                            ),
                                                                            C(
                                                                                "div",
                                                                                { className: "avatar avatar-stats p-50 m-0 bg-light-primary" },
                                                                                C(
                                                                                    "div",
                                                                                    { className: "avatar-content" },
                                                                                    C(
                                                                                        "svg",
                                                                                        {
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            "aria-hidden": "true",
                                                                                            role: "img",
                                                                                            width: "80",
                                                                                            height: "80",
                                                                                            preserveAspectRatio: "xMidYMid meet",
                                                                                            viewBox: "0 0 24 24",
                                                                                        },
                                                                                        C("path", {
                                                                                            fill: "#FFE751",
                                                                                            d:
                                                                                                "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm.5-13H11v6l5.2 3.2l.8-1.3l-4.5-2.7V7z",
                                                                                        })
                                                                                    )
                                                                                )
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            C(
                                                                "div",
                                                                { className: "col-sm-12 col-md-6 col-lg-6" },
                                                                C(
                                                                    "div",
                                                                    { className: "card" },
                                                                    C(
                                                                        "div",
                                                                        { className: "card-body" },
                                                                        C(
                                                                            "div",
                                                                            { className: "d-flex justify-content-between align-items-center" },
                                                                            C(
                                                                                "div",
                                                                                null,
                                                                                "none" == this.state.loader
                                                                                    ? C(
                                                                                          p().Fragment,
                                                                                          null,
                                                                                          C(
                                                                                              "h2",
                                                                                              null,
                                                                                              C(x.ZP, {
                                                                                                  className: "account-balance",
                                                                                                  start: 0,
                                                                                                  end: this.state.withdrawableDividends * this.BNBPriceInUSD,
                                                                                                  duration: 2.75,
                                                                                                  useEasing: !0,
                                                                                                  useGrouping: !0,
                                                                                                  separator: ",",
                                                                                                  decimals: 4,
                                                                                                  decimal: ".",
                                                                                                  prefix: "$",
                                                                                                  suffix: "",
                                                                                              })
                                                                                          )
                                                                                      )
                                                                                    : C(
                                                                                          p().Fragment,
                                                                                          null,
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "widget-loader" },
                                                                                              C("div", { role: "status", className: "spinner-grow text-primary" }, C("span", { className: "visually-hidden" }, "Loading..."))
                                                                                          )
                                                                                      ),
                                                                                C("p", { className: "card-text" }, "Pending Rewards"),
                                                                                C(
                                                                                    "h2",
                                                                                    { style: { fontSize: "20px", color: "#28a745" } },
                                                                                    C(
                                                                                        "span",
                                                                                        { className: "account-balance" },
                                                                                        C(x.ZP, {
                                                                                            className: "account-balance",
                                                                                            start: 0,
                                                                                            end: this.state.withdrawableDividends,
                                                                                            duration: 2.75,
                                                                                            useEasing: !0,
                                                                                            useGrouping: !0,
                                                                                            separator: ",",
                                                                                            decimals: 4,
                                                                                            decimal: ".",
                                                                                            prefix: "",
                                                                                            suffix: "",
                                                                                        })
                                                                                    ),
                                                                                    C("span", { style: { color: "#CBCBCB" }, className: "account-balance" }, " USDT")
                                                                                )
                                                                            ),
                                                                            C(
                                                                                "div",
                                                                                { className: "avatar avatar-stats p-50 m-0 bg-light-primary" },
                                                                                C(
                                                                                    "div",
                                                                                    { className: "avatar-content" },
                                                                                    C(
                                                                                        "svg",
                                                                                        {
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            width: "80",
                                                                                            height: "80",
                                                                                            viewBox: "0 0 24 24",
                                                                                            fill: "none",
                                                                                            stroke: "#FFE751",
                                                                                            "stroke-width": "2",
                                                                                            "stroke-linecap": "round",
                                                                                            "stroke-linejoin": "round",
                                                                                        },
                                                                                        C("polyline", { points: "1 4 1 10 7 10" }),
                                                                                        C("polyline", { points: "23 20 23 14 17 14" }),
                                                                                        C("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })
                                                                                    )
                                                                                )
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        // C(
                                                        //     "div",
                                                        //     { className: "row" },
                                                        //     C(
                                                        //         "div",
                                                        //         { className: "col-sm-12 col-md-12 col-lg-12" },
                                                        //         C(
                                                        //             "div",
                                                        //             { className: "card" },
                                                        //             C(
                                                        //                 "div",
                                                        //                 { className: "card-body" },
                                                        //                 C(
                                                        //                     "div",
                                                        //                     { className: "d-flex justify-content-between align-items-center buyback-card" },
                                                        //                     C(
                                                        //                         "button",
                                                        //                         { style: { width: "100%" }, onClick: this.claim, disabled: this.state.loaded, type: "button", className: "waves-effect round btn btn-outline-primary btn-lg" },
                                                        //                         C("span", { style: { color: "currentColor" }, className: "align-middle ms-25" }, this.state.claimbtnText),
                                                        //                         "Connect Wallet" === this.state.claimbtnText
                                                        //                             ? C(
                                                        //                                   p().Fragment,
                                                        //                                   null,
                                                        //                                   C(
                                                        //                                       "svg",
                                                        //                                       { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 512 512", style: { marginLeft: "5px" } },
                                                        //                                       C("path", {
                                                        //                                           fill: "#050505",
                                                        //                                           d:
                                                        //                                               "M95.5 104h320a87.73 87.73 0 0 1 11.18.71a66 66 0 0 0-77.51-55.56L86 94.08h-.3a66 66 0 0 0-41.07 26.13A87.57 87.57 0 0 1 95.5 104Zm320 24h-320a64.07 64.07 0 0 0-64 64v192a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V192a64.07 64.07 0 0 0-64-64ZM368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z",
                                                        //                                       }),
                                                        //                                       C("path", {
                                                        //                                           fill: "#050505",
                                                        //                                           d: "M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16s-18.5 24.5 0 24.5s0 23.5 0 23.5L85.5 236Z",
                                                        //                                       })
                                                        //                                   )
                                                        //                               )
                                                        //                             : C(p().Fragment, null)
                                                        //                     )
                                                        //                 )
                                                        //             )
                                                        //         )
                                                        //     )
                                                        // ),
                                                        C(
                                                            "div",
                                                            { className: "row" },
                                                            C(
                                                                "div",
                                                                { className: "col-sm-12 col-md-12 col-lg-6" },
                                                                C(
                                                                    "div",
                                                                    { className: "card" },
                                                                    "none" == this.state.loader
                                                                        ? C(
                                                                              p().Fragment,
                                                                              null,
                                                                              C(
                                                                                  "div",
                                                                                  { className: "data-info-widget card-body" },
                                                                                  C("div", { className: "data-info-widget-title" }, "Token Metadata"),
                                                                                  C(
                                                                                      "div",
                                                                                      { className: "data-info-widget-container" },
                                                                                      C("div", { className: "data-info-type" }, "Contract Address:"),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row-end", style: { marginTop: "-20px" } },
                                                                                          C(
                                                                                              "a",
                                                                                              { href: "https://bscscan.com/address/" + this.state.TokenContractAddress, target: "_blank", className: "blockchain-link" },
                                                                                              C(
                                                                                                  "div",
                                                                                                  { className: "data-info-value", id: "tokenMetaDataInfo" },
                                                                                                  this.state.TokenContractAddress.substring(0, 6) + "..." + this.state.TokenContractAddress.substring(34, 40)
                                                                                              )
                                                                                          ),
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "sm" },
                                                                                              C(
                                                                                                  "div",
                                                                                                  { className: "text-dark", id: "copy-button", style: { marginLeft: "10px", marginTop: "-2px" } },
                                                                                                  C(
                                                                                                      "a",
                                                                                                      { href: "https://bscscan.com/address/" + this.state.TokenContractAddress, target: "_blank", className: "blockchain-link" },
                                                                                                      C("img", { src: "media/bsc.ico", style: { maxWidth: "20px" } })
                                                                                                  )
                                                                                              )
                                                                                          )
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row", style: { marginTop: "5px" } },
                                                                                          C("div", { className: "data-info-type" }, "Token Name:"),
                                                                                          C("div", { className: "data-info-value" }, this.state.TokenName)
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row", style: { marginTop: "5px" } },
                                                                                          C("div", { className: "data-info-type" }, "Token Symbol:"),
                                                                                          C("div", { className: "data-info-value" }, this.state.TokenSymbol)
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row" },
                                                                                          C("div", { className: "data-info-type" }, "Token Total Supply:"),
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-value" },
                                                                                              C(x.ZP, {
                                                                                                  className: "account-balance",
                                                                                                  start: 0,
                                                                                                  end: this.state.TotalSupply,
                                                                                                  duration: 2.75,
                                                                                                  useEasing: !0,
                                                                                                  useGrouping: !0,
                                                                                                  separator: ",",
                                                                                                  decimals: 0,
                                                                                                  decimal: ".",
                                                                                                  prefix: "",
                                                                                                  suffix: " " + this.state.TokenSymbol,
                                                                                              })
                                                                                          )
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row" },
                                                                                          C("div", { className: "data-info-type" }, "Token Price:"),
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-value" },
                                                                                              C(x.ZP, {
                                                                                                  className: "account-balance",
                                                                                                  start: 0,
                                                                                                  end: this.state.tokenPriceinUSD,
                                                                                                  duration: 2.75,
                                                                                                  useEasing: !0,
                                                                                                  useGrouping: !0,
                                                                                                  separator: ",",
                                                                                                  decimals: 12,
                                                                                                  decimal: ".",
                                                                                                  prefix: "~$ ",
                                                                                                  suffix: "",
                                                                                              })
                                                                                          )
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row" },
                                                                                          C("div", { className: "data-info-type" }, "Circulation Supply:"),
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-value" },
                                                                                              C(x.ZP, {
                                                                                                  className: "account-balance",
                                                                                                  start: 0,
                                                                                                  end: this.state.CirculationSupply,
                                                                                                  duration: 2.75,
                                                                                                  useEasing: !0,
                                                                                                  useGrouping: !0,
                                                                                                  separator: ",",
                                                                                                  decimals: 0,
                                                                                                  decimal: ".",
                                                                                                  prefix: "",
                                                                                                  suffix: " " + this.state.TokenSymbol,
                                                                                              })
                                                                                          )
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row" },
                                                                                          C("div", { className: "data-info-type" }, "Total Burned Tokens:"),
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-value" },
                                                                                              C(x.ZP, {
                                                                                                  className: "account-balance",
                                                                                                  start: 0,
                                                                                                  end: this.state.TotalBurned,
                                                                                                  duration: 2.75,
                                                                                                  useEasing: !0,
                                                                                                  useGrouping: !0,
                                                                                                  separator: ",",
                                                                                                  decimals: 0,
                                                                                                  decimal: ".",
                                                                                                  prefix: "",
                                                                                                  suffix: " " + this.state.TokenSymbol,
                                                                                              })
                                                                                          )
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row" },
                                                                                          C("div", { className: "data-info-type" }, "Total Burned Percentage:"),
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-value" },
                                                                                              C(x.ZP, {
                                                                                                  className: "account-balance",
                                                                                                  start: 0,
                                                                                                  end: this.state.TotalBurnedPer,
                                                                                                  duration: 2.75,
                                                                                                  useEasing: !0,
                                                                                                  useGrouping: !0,
                                                                                                  separator: ",",
                                                                                                  decimals: 2,
                                                                                                  decimal: ".",
                                                                                                  prefix: "",
                                                                                                  suffix: " %",
                                                                                              })
                                                                                          )
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row" },
                                                                                          C("div", { className: "data-info-type" }, "Market Cap:"),
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-value" },
                                                                                              C(x.ZP, {
                                                                                                  className: "account-balance",
                                                                                                  start: 0,
                                                                                                  end: this.state.MarketCap,
                                                                                                  duration: 2.75,
                                                                                                  useEasing: !0,
                                                                                                  useGrouping: !0,
                                                                                                  separator: ",",
                                                                                                  decimals: 2,
                                                                                                  decimal: ".",
                                                                                                  prefix: "~$ ",
                                                                                                  suffix: "",
                                                                                              })
                                                                                          )
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row" },
                                                                                          C("div", { className: "data-info-type" }, "Liquidity:"),
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-value" },
                                                                                              C(x.ZP, {
                                                                                                  className: "account-balance",
                                                                                                  start: 0,
                                                                                                  end: this.state.Liquidity,
                                                                                                  duration: 2.75,
                                                                                                  useEasing: !0,
                                                                                                  useGrouping: !0,
                                                                                                  separator: ",",
                                                                                                  decimals: 2,
                                                                                                  decimal: ".",
                                                                                                  prefix: "~$ ",
                                                                                                  suffix: "",
                                                                                              })
                                                                                          )
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row" },
                                                                                          C("div", { className: "data-info-type" }, "Available fund for buyback:"),
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-value" },
                                                                                              C(x.ZP, {
                                                                                                  className: "account-balance",
                                                                                                  start: 0,
                                                                                                  end: this.state.buybackFund,
                                                                                                  duration: 2.75,
                                                                                                  useEasing: !0,
                                                                                                  useGrouping: !0,
                                                                                                  separator: ",",
                                                                                                  decimals: 2,
                                                                                                  decimal: ".",
                                                                                                  prefix: "",
                                                                                                  suffix: " BNB",
                                                                                              })
                                                                                          )
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                        : C(
                                                                              p().Fragment,
                                                                              null,
                                                                              C(
                                                                                  "div",
                                                                                  { className: "widget-loader" },
                                                                                  C("div", { role: "status", className: "spinner-grow text-primary" }, C("span", { className: "visually-hidden" }, "Loading..."))
                                                                              )
                                                                          )
                                                                )
                                                            ),
                                                            C(
                                                                "div",
                                                                { className: "col-sm-12 col-md-12 col-lg-6" },
                                                                C(
                                                                    "div",
                                                                    { className: "card" },
                                                                    "none" == this.state.loader
                                                                        ? C(
                                                                              p().Fragment,
                                                                              null,
                                                                              C(
                                                                                  "div",
                                                                                  { className: "data-info-widget card-body" },
                                                                                  C("div", { className: "data-info-widget-title" }, "Dividend Details"),
                                                                                  C(
                                                                                      "div",
                                                                                      { className: "data-info-widget-container" },
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row" },
                                                                                          C("div", { className: "data-info-type" }, "Rewards Contract Address:"),
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-row-end", style: { marginTop: "-20px" } },
                                                                                              C(
                                                                                                  "a",
                                                                                                  { href: "https://bscscan.com/address/" + this.state.RewardContractAddress, target: "_blank", className: "blockchain-link" },
                                                                                                  C(
                                                                                                      "div",
                                                                                                      { className: "data-info-value", id: "tokenMetaDataInfo" },
                                                                                                      this.state.RewardContractAddress.substring(0, 6) + "..." + this.state.RewardContractAddress.substring(34, 40)
                                                                                                  )
                                                                                              ),
                                                                                              C(
                                                                                                  "div",
                                                                                                  { className: "sm" },
                                                                                                  C(
                                                                                                      "div",
                                                                                                      { className: "text-dark", id: "copy-button", style: { marginLeft: "10px", marginTop: "-2px" } },
                                                                                                      C(
                                                                                                          "a",
                                                                                                          { href: "https://bscscan.com/address/" + this.state.RewardContractAddress, target: "_blank", className: "blockchain-link" },
                                                                                                          C("img", { src: "media/bsc.ico", style: { maxWidth: "20px" } })
                                                                                                      )
                                                                                                  )
                                                                                              )
                                                                                          )
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row" },
                                                                                          C("div", { className: "data-info-type" }, "Total Rewards Distributed:"),
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-value" },
                                                                                              C(x.ZP, {
                                                                                                  className: "account-balance",
                                                                                                  start: 0,
                                                                                                  end: this.state.totalRewardsDistributed,
                                                                                                  duration: 2.75,
                                                                                                  useEasing: !0,
                                                                                                  useGrouping: !0,
                                                                                                  separator: ",",
                                                                                                  decimals: 4,
                                                                                                  decimal: ".",
                                                                                                  prefix: "",
                                                                                                  suffix: " USDT",
                                                                                              })
                                                                                          )
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row" },
                                                                                          C("div", { className: "data-info-type" }, "Total Rewards Distributed USD:"),
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-value" },
                                                                                              C(x.ZP, {
                                                                                                  className: "account-balance",
                                                                                                  start: 0,
                                                                                                  end: this.state.totalRewardsDistributed * this.BNBPriceInUSD,
                                                                                                  duration: 2.75,
                                                                                                  useEasing: !0,
                                                                                                  useGrouping: !0,
                                                                                                  separator: ",",
                                                                                                  decimals: 2,
                                                                                                  decimal: ".",
                                                                                                  prefix: "$",
                                                                                                  suffix: "",
                                                                                              })
                                                                                          )
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row" },
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-type", id: "reward-cycle" },
                                                                                              "Reward Cycle",
                                                                                              C(
                                                                                                  "svg",
                                                                                                  {
                                                                                                      xmlns: "http://www.w3.org/2000/svg",
                                                                                                      width: "10",
                                                                                                      height: "10",
                                                                                                      viewBox: "0 0 24 24",
                                                                                                      fill: "none",
                                                                                                      stroke: "currentColor",
                                                                                                      "stroke-width": "2",
                                                                                                      "stroke-linecap": "round",
                                                                                                      "stroke-linejoin": "round",
                                                                                                      style: { marginLeft: "3px" },
                                                                                                  },
                                                                                                  C("circle", { cx: "12", cy: "12", r: "10" }),
                                                                                                  C("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
                                                                                                  C("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
                                                                                              )
                                                                                          ),
                                                                                          C("div", { className: "data-info-value" }, "Every 1 hours")
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row" },
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-type", id: "dividend-holders" },
                                                                                              "Total Dividend Holders",
                                                                                              C(
                                                                                                  "svg",
                                                                                                  {
                                                                                                      xmlns: "http://www.w3.org/2000/svg",
                                                                                                      width: "10",
                                                                                                      height: "10",
                                                                                                      viewBox: "0 0 24 24",
                                                                                                      fill: "none",
                                                                                                      stroke: "currentColor",
                                                                                                      "stroke-width": "2",
                                                                                                      "stroke-linecap": "round",
                                                                                                      "stroke-linejoin": "round",
                                                                                                      style: { marginLeft: "3px" },
                                                                                                  },
                                                                                                  C("circle", { cx: "12", cy: "12", r: "10" }),
                                                                                                  C("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
                                                                                                  C("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
                                                                                              )
                                                                                          ),
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-value" },
                                                                                              C(x.ZP, {
                                                                                                  className: "account-balance",
                                                                                                  start: 0,
                                                                                                  end: this.state.TotalDividendHolders,
                                                                                                  duration: 2.75,
                                                                                                  useEasing: !0,
                                                                                                  useGrouping: !0,
                                                                                                  separator: ",",
                                                                                                  decimals: 0,
                                                                                                  decimal: ".",
                                                                                                  prefix: "",
                                                                                                  suffix: "",
                                                                                              })
                                                                                          )
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row" },
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-type", id: "current-dividend" },
                                                                                              "Current Dividend Processing Index",
                                                                                              C(
                                                                                                  "svg",
                                                                                                  {
                                                                                                      xmlns: "http://www.w3.org/2000/svg",
                                                                                                      width: "10",
                                                                                                      height: "10",
                                                                                                      viewBox: "0 0 24 24",
                                                                                                      fill: "none",
                                                                                                      stroke: "currentColor",
                                                                                                      "stroke-width": "2",
                                                                                                      "stroke-linecap": "round",
                                                                                                      "stroke-linejoin": "round",
                                                                                                      style: { marginLeft: "3px" },
                                                                                                  },
                                                                                                  C("circle", { cx: "12", cy: "12", r: "10" }),
                                                                                                  C("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
                                                                                                  C("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
                                                                                              )
                                                                                          ),
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-value" },
                                                                                              C(x.ZP, {
                                                                                                  className: "account-balance",
                                                                                                  start: 0,
                                                                                                  end: this.state.CurrentDividendProcessingIndex,
                                                                                                  duration: 2.75,
                                                                                                  useEasing: !0,
                                                                                                  useGrouping: !0,
                                                                                                  separator: ",",
                                                                                                  decimals: 0,
                                                                                                  decimal: ".",
                                                                                                  prefix: "",
                                                                                                  suffix: "",
                                                                                              })
                                                                                          )
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row" },
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-type", id: "pending-dividend-holders" },
                                                                                              "Pending Dividend Holders Count",
                                                                                              C(
                                                                                                  "svg",
                                                                                                  {
                                                                                                      xmlns: "http://www.w3.org/2000/svg",
                                                                                                      width: "10",
                                                                                                      height: "10",
                                                                                                      viewBox: "0 0 24 24",
                                                                                                      fill: "none",
                                                                                                      stroke: "currentColor",
                                                                                                      "stroke-width": "2",
                                                                                                      "stroke-linecap": "round",
                                                                                                      "stroke-linejoin": "round",
                                                                                                      style: { marginLeft: "3px" },
                                                                                                  },
                                                                                                  C("circle", { cx: "12", cy: "12", r: "10" }),
                                                                                                  C("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
                                                                                                  C("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
                                                                                              )
                                                                                          ),
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-value" },
                                                                                              C(x.ZP, {
                                                                                                  className: "account-balance",
                                                                                                  start: 0,
                                                                                                  end: this.state.PendingDividendHoldersCount,
                                                                                                  duration: 2.75,
                                                                                                  useEasing: !0,
                                                                                                  useGrouping: !0,
                                                                                                  separator: ",",
                                                                                                  decimals: 0,
                                                                                                  decimal: ".",
                                                                                                  prefix: "",
                                                                                                  suffix: "",
                                                                                              })
                                                                                          )
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-row" },
                                                                                          C("div", { className: "data-info-type" }, "Rewards Distribution Completion: "),
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "data-info-value", style: { marginBottom: "10px" } },
                                                                                              C(x.ZP, {
                                                                                                  className: "account-balance",
                                                                                                  start: 0,
                                                                                                  end: this.state.RewardsDistributionCompletion,
                                                                                                  duration: 2.75,
                                                                                                  useEasing: !0,
                                                                                                  useGrouping: !0,
                                                                                                  separator: ",",
                                                                                                  decimals: 2,
                                                                                                  decimal: ".",
                                                                                                  prefix: "",
                                                                                                  suffix: " %",
                                                                                              })
                                                                                          )
                                                                                      ),
                                                                                      C(
                                                                                          "div",
                                                                                          { className: "data-info-progress-tracker mt-2" },
                                                                                          C("div", { className: "data-info-progress-tracker-title" }, "Dividend Distribution Progress"),
                                                                                          C(
                                                                                              "div",
                                                                                              { className: "progress-bar-dividend" },
                                                                                              C(
                                                                                                  "div",
                                                                                                  { className: "progress-bar-primary progress" },
                                                                                                  C(
                                                                                                      "div",
                                                                                                      {
                                                                                                          className: "progress-bar",
                                                                                                          role: "progressbar",
                                                                                                          "aria-valuenow": parseFloat(this.state.RewardsDistributionCompletion).toFixed(2),
                                                                                                          "aria-valuemin": "0",
                                                                                                          "aria-valuemax": "100",
                                                                                                          style: { width: parseFloat(this.state.RewardsDistributionCompletion).toFixed(2) + "%" },
                                                                                                      },
                                                                                                      C(x.ZP, {
                                                                                                          className: "account-balance",
                                                                                                          start: 0,
                                                                                                          end: this.state.RewardsDistributionCompletion,
                                                                                                          duration: 2.75,
                                                                                                          useEasing: !0,
                                                                                                          useGrouping: !0,
                                                                                                          separator: ",",
                                                                                                          decimals: 2,
                                                                                                          decimal: ".",
                                                                                                          prefix: "",
                                                                                                          suffix: " %",
                                                                                                      })
                                                                                                  )
                                                                                              )
                                                                                          )
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                        : C(
                                                                              p().Fragment,
                                                                              null,
                                                                              C(
                                                                                  "div",
                                                                                  { className: "widget-loader" },
                                                                                  C("div", { role: "status", className: "spinner-grow text-primary" }, C("span", { className: "visually-hidden" }, "Loading..."))
                                                                              )
                                                                          )
                                                                )
                                                            )
                                                        ),
                                                        C(
                                                            "div",
                                                            { className: "row" },
                                                            C(
                                                                "div",
                                                                { className: "col-sm-12 col-md-12 col-lg-12" },
                                                                C(
                                                                    "div",
                                                                    { className: "card" },
                                                                    C(
                                                                        "div",
                                                                        { className: "data-info-widget card-body" },
                                                                        C(
                                                                            "div",
                                                                            { className: "total-user-rewards row" },
                                                                            C(
                                                                                "div",
                                                                                { className: "col-sm-12 col-md-6 col-lg-3" },
                                                                                C(
                                                                                    "div",
                                                                                    { className: "user-dividend-data-container" },
                                                                                    C("div", { className: "user-divided-data-title" }, "Total Rewards Distributed So Far"),
                                                                                    C(
                                                                                        "div",
                                                                                        { className: "user-divided-data-value" },
                                                                                        "none" == this.state.loader
                                                                                            ? C(
                                                                                                  p().Fragment,
                                                                                                  null,
                                                                                                  C(x.ZP, {
                                                                                                      className: "account-balance",
                                                                                                      start: 0,
                                                                                                      end: this.state.totalRewardsDistributed,
                                                                                                      duration: 2.75,
                                                                                                      useEasing: !0,
                                                                                                      useGrouping: !0,
                                                                                                      separator: ",",
                                                                                                      decimals: 4,
                                                                                                      decimal: ".",
                                                                                                      prefix: "",
                                                                                                      suffix: " USDT",
                                                                                                  })
                                                                                              )
                                                                                            : C(
                                                                                                  p().Fragment,
                                                                                                  null,
                                                                                                  C(
                                                                                                      "div",
                                                                                                      { className: "widget-loader" },
                                                                                                      C("div", { role: "status", className: "spinner-grow text-primary" }, C("span", { className: "visually-hidden" }, "Loading..."))
                                                                                                  )
                                                                                              )
                                                                                    )
                                                                                )
                                                                            ),
                                                                            C(
                                                                                "div",
                                                                                { className: "col-sm-12 col-md-6 col-lg-3" },
                                                                                C(
                                                                                    "div",
                                                                                    { className: "user-dividend-data-container" },
                                                                                    C("div", { className: "user-divided-data-title" }, "Total Rewards Distributed So Far"),
                                                                                    C(
                                                                                        "div",
                                                                                        { className: "user-divided-data-value" },
                                                                                        "none" == this.state.loader
                                                                                            ? C(
                                                                                                  p().Fragment,
                                                                                                  null,
                                                                                                  C(x.ZP, {
                                                                                                      className: "account-balance",
                                                                                                      start: 0,
                                                                                                      end: this.state.totalRewardsDistributed * this.BNBPriceInUSD,
                                                                                                      duration: 2.75,
                                                                                                      useEasing: !0,
                                                                                                      useGrouping: !0,
                                                                                                      separator: ",",
                                                                                                      decimals: 2,
                                                                                                      decimal: ".",
                                                                                                      prefix: "$",
                                                                                                      suffix: "",
                                                                                                  })
                                                                                              )
                                                                                            : C(
                                                                                                  p().Fragment,
                                                                                                  null,
                                                                                                  C(
                                                                                                      "div",
                                                                                                      { className: "widget-loader" },
                                                                                                      C("div", { role: "status", className: "spinner-grow text-primary" }, C("span", { className: "visually-hidden" }, "Loading..."))
                                                                                                  )
                                                                                              )
                                                                                    )
                                                                                )
                                                                            ),
                                                                            C(
                                                                                "div",
                                                                                { className: "col-sm-12 col-md-6 col-lg-3" },
                                                                                C(
                                                                                    "div",
                                                                                    { className: "user-dividend-data-container" },
                                                                                    C("div", { className: "user-divided-data-title" }, "Total Pending Rewards"),
                                                                                    C(
                                                                                        "div",
                                                                                        { className: "user-divided-data-value" },
                                                                                        "none" == this.state.loader
                                                                                            ? C(
                                                                                                  p().Fragment,
                                                                                                  null,
                                                                                                  C(x.ZP, {
                                                                                                      className: "account-balance",
                                                                                                      start: 0,
                                                                                                      end: this.state.totalPendingRewards,
                                                                                                      duration: 2.75,
                                                                                                      useEasing: !0,
                                                                                                      useGrouping: !0,
                                                                                                      separator: ",",
                                                                                                      decimals: 4,
                                                                                                      decimal: ".",
                                                                                                      prefix: "",
                                                                                                      suffix: " USDT",
                                                                                                  })
                                                                                              )
                                                                                            : C(
                                                                                                  p().Fragment,
                                                                                                  null,
                                                                                                  C(
                                                                                                      "div",
                                                                                                      { className: "widget-loader" },
                                                                                                      C("div", { role: "status", className: "spinner-grow text-primary" }, C("span", { className: "visually-hidden" }, "Loading..."))
                                                                                                  )
                                                                                              )
                                                                                    )
                                                                                )
                                                                            ),
                                                                            C(
                                                                                "div",
                                                                                { className: "col-sm-12 col-md-6 col-lg-3" },
                                                                                C(
                                                                                    "div",
                                                                                    { className: "user-dividend-data-container" },
                                                                                    C("div", { className: "user-divided-data-title" }, "Total Pending Rewards"),
                                                                                    C(
                                                                                        "div",
                                                                                        { className: "user-divided-data-value" },
                                                                                        "none" == this.state.loader
                                                                                            ? C(
                                                                                                  p().Fragment,
                                                                                                  null,
                                                                                                  C(x.ZP, {
                                                                                                      className: "account-balance",
                                                                                                      start: 0,
                                                                                                      end: this.state.totalPendingRewards * this.BNBPriceInUSD,
                                                                                                      duration: 2.75,
                                                                                                      useEasing: !0,
                                                                                                      useGrouping: !0,
                                                                                                      separator: ",",
                                                                                                      decimals: 2,
                                                                                                      decimal: ".",
                                                                                                      prefix: "$",
                                                                                                      suffix: "",
                                                                                                  })
                                                                                              )
                                                                                            : C(
                                                                                                  p().Fragment,
                                                                                                  null,
                                                                                                  C(
                                                                                                      "div",
                                                                                                      { className: "widget-loader" },
                                                                                                      C("div", { role: "status", className: "spinner-grow text-primary" }, C("span", { className: "visually-hidden" }, "Loading..."))
                                                                                                  )
                                                                                              )
                                                                                    )
                                                                                )
                                                                            )
                                                                        ),
                                                                        C("div", null)
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            C(
                                                "div",
                                                { id: "connectModal", tabindex: "-1", style: { position: "relative", zIndex: "1050", display: "none" } },
                                                C(
                                                    "div",
                                                    { className: "" },
                                                    C(
                                                        "div",
                                                        { className: "modal fade show", role: "dialog", tabindex: "-1", style: { display: "block" } },
                                                        C(
                                                            "div",
                                                            { className: "modal-dialog modal-dialog-centered", role: "document" },
                                                            C(
                                                                "div",
                                                                { className: "modal-content" },
                                                                C(
                                                                    "div",
                                                                    { className: "modal-header" },
                                                                    C(
                                                                        "h5",
                                                                        { className: "modal-title" },
                                                                        C("div", { style: { color: "#000 !important" }, className: "login-modal-title" }, "Connect your wallet"),
                                                                        C("span", { className: "build-version" }, "Build Version 1.0")
                                                                    ),
                                                                    C("button", { type: "button", className: "btn-close", "aria-label": "Close" })
                                                                ),
                                                                C(
                                                                    "div",
                                                                    { className: "login-model-body modal-body" },
                                                                    C(
                                                                        "div",
                                                                        { className: "connector-select-container" },
                                                                        C(
                                                                            "div",
                                                                            { onClick: this.connectMetamask, className: "metamask-connector" },
                                                                            C(
                                                                                "div",
                                                                                { className: "metamask-login-btn" },
                                                                                C("div", { className: "logo" }, C("img", { src: "/media/metamask.b6b09bd4.svg", alt: "Login with metamask" })),
                                                                                C("div", { className: "value" }, "Login with metamask")
                                                                            )
                                                                        ),
                                                                        C(
                                                                            "div",
                                                                            { onClick: this.connectWalletConnect, className: "walletconnect-connector" },
                                                                            C(
                                                                                "div",
                                                                                { className: "walletconnect-login-btn" },
                                                                                C("div", { className: "logo" }, C("img", { className: "walletconnect-logo", src: "/media/wallet-connect.c0072cb0.svg", alt: "Login with walletconnect" })),
                                                                                C("div", { className: "value" }, "Login with walletconnect")
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    C("div", { className: "modal-backdrop fade show" })
                                                )
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(v.Component));
            a.default = A;
        },
        8581: function (e, a, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function () {
                    return t(1313);
                },
            ]);
        },
    },
    function (e) {
        e.O(0, [774, 543, 571, 351, 537, 407, 683], function () {
            return (a = 8581), e((e.s = a));
            var a;
        });
        var a = e.O();
        _N_E = a;
    },
]);
