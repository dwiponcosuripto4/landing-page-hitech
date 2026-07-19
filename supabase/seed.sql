-- ============================================================
--  PT. HiTech Aksara Digital - Seed Data
--  Run AFTER supabase/schema.sql
-- ============================================================

-- ------------------------------------------------------------
--  contacts
-- ------------------------------------------------------------
insert into public.contacts (full_name, email, subject, message, consent)
values
  ('Siti Rahmawati', 'siti.rahmawati@globex.co.id', 'Konsultasi Digital',
   'Halo, kami ingin melakukan migrasi sistem ERP ke cloud. Bisa bantu konsultasi?', true),
  ('Budi Santoso', 'budi.santoso@mandirilogistics.id', 'Kemitraan',
   'Tertarik untuk kerja sama integrasi API logistik antar-cabang.', true),
  ('Dewi Lestari', 'dewi.lestari@anindyahealth.com', 'Dukungan Teknis',
   'Butuh bantuan monitoring keamanan untuk aplikasi kesehatan kami.', false),
  ('Agus Pratama', 'agus@finserve.id', 'Lainnya',
   'Pertanyaan umum mengenai layanan cyber security untuk bank digital.', true)
on conflict do nothing;

-- ------------------------------------------------------------
--  projects
-- ------------------------------------------------------------
insert into public.projects (title, category, description, image_url, stat, is_active)
values
  ('LogiSmart Global System', 'Enterprise Resource Planning',
   'Platform ERP berbasis cloud dengan sinkronisasi real-time untuk 200+ cabang nasional.',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuAIudSJk7cCKCQqGaTrwnAp886BOyh8594LkZKIDqHncmCmt7pvtkSQCPSjaxrt4F07_Ix49Q_EcJ0KrmB5AaX4Ql_8q96vngkftlO6LneUPa9K3aQ5P3nD_07-5S-6R0ZkPwhZPkP5PiHRJPDwMfvnV9Ee9U1fYHyU52eoCHV3ZHnXraNM_DIdrertxMlDROH9snDKtouH1-ZeBX_bAqMNrDHyjB7PgWtHgw3QZYeHykhSl2gLIGNjWA8dGhAVEZWcDCxPB304OCM',
   '150% Efisiensi', true),
  ('Aksara Pay Mobile', 'Fintech',
   'Dompet digital dengan arsitektur aman untuk transaksi keuangan real-time.',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuCwC-V3WaTQqZ9xxVAtcK8Oo5qUUgjdfebCfDHtHzkfO5swkft0vQHpGrUrQZgCYzMW-9IYzZFsPouqRq5uL1N91_9on87yeyBkeLJMN78cXEQZ0k-ZfiRkxIRdybRruV6YKVxvdeWbUKkPCNhRHq9KUGGW9oA6b3Ltby2C5yxyRDz4rFpQSkwjDZB8YgoQUnO5GZM7NwzB6MDVaUhsKE1O_8ud-LwguCPzl6LLVaWAUo5Hh7GnVK63ZBlCOsdd3GM5BLpA-WT7tCg',
   '2 Juta+ Pengguna', true),
  ('LuxTrade Portal', 'E-Commerce',
   'Platform e-commerce premium dengan performa tinggi dan UI mewah.',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuDTC2uY54GXkw2PaekBruiaZpRGiOhDZcJU61jYaOJa8uzg1haDkIQGXWskSaSvyQqMuNXSVwXPnarcEM4hfLB8qxMLkTF1w5cV3cBkxvOZ9-j_iyOsGLwLNU5PfNmO9yAtl0Aut3dL-WRhs5Qj6bqbRbyFIhvsg32mR7rh6igD_BywBhD1GxqJRZvI1odq1FWQeB8dkz9PfMYWGZiAThKCkIPCiw9nKUl1-2U9yUhRbNBK3ld_kf_MNCK4sUPBHMid-MyooU0aSPg',
   '3x Konversi', true),
  ('Predictive Analytics Engine', 'AI Solutions',
   'Mesin analitik prediktif berbasis machine learning untuk keputusan bisnis.',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuBI1Uh5Kh9-4yIdi2VVN0OInUyz-aITTY18-8Rxzq3mgDz-o8G25khpmV9GkEtNYYHWh4GQd0MYHt9jqBF0HVjJ5k_pZ_r-erZ7E7BKlX_kbVFf4RTe92ExUpTDTQW9pQIi4i5KcaZjZ7F7gXfEd2FYz1He5xdP8iZPtpA1Jve6w4rSZSkZnAMtXnvFROEGDAvU9T3H238SF9JSVnOVg4_YExzSyQclIu1ALoXK35ocT8BHqEwdvePKo2vpdUq6upvdgwOOup96km0',
   '99.9% Akurasi', true),
  ('MediLink Connect', 'HealthTech',
   'Sistem manajemen kesehatan terintegrasi untuk rumah sakit dan klinik.',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuBIrPrXcuXPVd1WvW2X3MmJbfB53EL5_oSQeS-dBlF6ZZgkdpbZsmyniAMoKJsF8dB54wL5l_T2gtG7ArGhHmDBv48iY20oaGCeC1sx_H8Ak13m6SmD2gfFLJkLtuTs0x4DehxsOmbfuautiKJlhFH75qujXyGghNV6M8Tg3CRtDBz0OwyZ5T9o200jHxVGPUF-oi7h6tDMlalIOQOOVDFYeZljHGqjOd8EPNqwqMGhJ9fyvMt0DK2aoADpOGqnpn4iqdsF_KucXw0',
   '50+ Klinik', true)
on conflict do nothing;

-- ------------------------------------------------------------
--  testimonials
-- ------------------------------------------------------------
insert into public.testimonials (name, role, company, quote, avatar_url, is_active)
values
  ('Siti Rahmawati', 'CTO', 'Global Tech Solutions',
   'HiTech Aksara Digital membantu kami melakukan migrasi sistem legacy ke arsitektur cloud modern hanya dalam waktu 3 bulan. Efisiensi operasional kami meningkat hingga 40%.',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuDKta8RiYH0S8iwI7oDjkng6TUP6U80R3qjzBTb-QJWA-AdrHVt1RtmypJgIkpZhjfKKNAmCa5eRHMMNuY_tFey68-E_cbk4ZPSEQfjM182UnjqffFU82wpw8FWv6MrE5bdqEgATdmH29OeJFlGSqH6Lkz5sCZwrWOwAeq0L5v0ofaZzvGhUOM5JLQmAaQw5nl4KtvzFO4fibqE1f1H3I-cLaacg58lrn0dOtbLSoIugCSKi39_bHqI8uWU5MnV6lTFysuXpNpFnHM',
   true),
  ('Budi Santoso', 'Director of Ops', 'Mandiri Logistics',
   'Keahlian teknis mereka sangat mengesankan, tetapi yang benar-benar membedakan adalah komitmen mereka terhadap keamanan data kami selama proses integrasi API.',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuCZT7hj7SwwCMh4OrEjV-wYex2xBN59Kom_pKY9YK8UDyNakkRK8V_isJtzMw3TMYVI-HVPs_UHwIQiMU9DeFdRYuEac27W6DjCAwW3bXmoFnnDG51Z6wY3ndEsqsBiguj78T5vFTIjg-72d9v7LzawhdBYywTgHfqaaD7afer3vIRGvcedjKf3z6neDqp5WgrvdOrnYup4yQgrcvSZY-Q6MUtbXz5Ta8i-3QcWcKOpXyfFOMjCDwLQbUcRTtS8y9AXHOB__u_KECo',
   true)
on conflict do nothing;

-- ------------------------------------------------------------
--  services
-- ------------------------------------------------------------
insert into public.services (title, description, icon, sort_order, is_active)
values
  ('Software Custom Development', 'Membangun perangkat lunak yang disesuaikan secara khusus untuk proses bisnis unik Anda.', 'developer_mode_tv', 1, true),
  ('Cloud Infrastructure', 'Optimasi infrastruktur cloud untuk performa maksimal dan biaya minimal.', 'cloud_done', 2, true),
  ('Cyber Security', 'Proteksi berlapis terhadap ancaman siber.', 'security', 3, true),
  ('Data Analytics', 'Wawasan mendalam dari data bisnis Anda.', 'analytics', 4, true)
on conflict do nothing;
