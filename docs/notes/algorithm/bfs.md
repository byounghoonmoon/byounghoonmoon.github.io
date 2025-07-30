# BFS (Breadth-First Search)

## 📘 개념
- 루트 노드에서 시작해서 인접한 노드들을 먼저 탐색한 후, 그 다음 레벨의 노드를 탐색하는 방식.
- **큐(Queue) 사용.**

## 🧠 특징
- 너비 우선: 가까운 노드부터 탐색
- 최단거리 탐색에 적합
- 방문 순서가 명확함

## ✅ 사용 예시
- 최단 경로 (ex. 미로에서 출구까지 거리)
- 레벨 탐색 (트리의 각 레벨별 노드 처리)
- 토마토 익히기 문제

## 🧩 기본 구현 (2차원 배열 기준, row/col)
```java
boolean[][] visited;
int[][] directions = {{-1,0}, {1,0}, {0,-1}, {0,1}}; // 상하좌우

void bfs(int startRow, int startCol) {
    Queue<int[]> queue = new LinkedList<>();
    queue.offer(new int[]{startRow, startCol});
    visited[startRow][startCol] = true;

    while (!queue.isEmpty()) {
        int[] curr = queue.poll();
        int row = curr[0], col = curr[1];

        for (int[] dir : directions) {
            int nr = row + dir[0];
            int nc = col + dir[1];

            if (nr >= 0 && nr < N && nc >= 0 && nc < M && !visited[nr][nc]) {
                visited[nr][nc] = true;
                queue.offer(new int[]{nr, nc});
            }
        }
    }
}
```